// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Text, Pressable, TouchableOpacity, Image, Modal, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';

// --------------- ASSETS ---------------
import { Colors, Fonts, MainStyles, Images, Icons, Matrics, Constants } from '../../CommonConfig';
import { AddProductStyle as styles } from './Styles';
import { Input, Loader } from '../../Components/Common';
import { Popup } from '../../Helpers';

const EditProduct = ({ navigation, route }) => {
    const { selectedItem } = route.params;

    const [name, setName] = React.useState(selectedItem?.product_data?.name ?? '');
    const [price, setPrice] = React.useState(selectedItem?.product_data?.price ?? '');
    const [offerPrice, setofferPrice] = React.useState(selectedItem?.product_data?.offerPrice ?? '');
    const [productImage, setProductImage] = React.useState('');
    const [ImageName, setImageName] = React.useState('');
    const [ImageType, setImageType] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [nameError, setNameError] = React.useState('');
    const [priceError, setPriceError] = React.useState('');
    const [offerPriceError, setOfferPriceError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    //----------LIFECYCLE/ HOOKS---------------

    //----------METHOD---------------
    const onPressTakePhoto = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            console.log('image-->', image);
            let Filename = '';
            if (image.filename == undefined || image.filename == null) {
                var getFilename = image.path.split("/");
                Filename = getFilename[getFilename.length - 1];
            } else {
                Filename = image.filename;
            }
            setProductImage(image.path);
            setImageName(Filename);
            setImageType(image.mime);
            setModalVisible(false);
        });
    }

    const onPressGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            let Filename = '';
            if (image.filename == undefined || image.filename == null) {
                var getFilename = image.path.split("/");
                Filename = getFilename[getFilename.length - 1];
            } else {
                Filename = image.filename;
            }
            setProductImage(image.path);
            setImageName(Filename);
            setImageType(image.mime);
            setModalVisible(false);
        });
    }

    const onPressEditProduct = () => {
        if (name == "") {
            setNameError('Please enter name');
        } else if (price == "") {
            setPriceError('Please enter price');
        } else if (offerPrice == "") {
            setOfferPriceError('Please enter offer price');
        } else {
            setIsLoading(true);
            fireStoreProduct();
        }
    }

    const fireStoreProduct = async () => {
        const productObj = {
            "userId": global.userId,
            "name": name,
            "price": price,
            "offerPrice": offerPrice,
            "image": ImageName
        }
        await firestore()
            .collection("Products")
            .doc(selectedItem?.pid)
            .update(productObj)
            .then(async () => {
                setIsLoading(false);
                Popup.success('Product updated successfully!');
                navigation.goBack();
            })
            .catch(error => {
                Popup.error(error.message);
                setIsLoading(false);
            });
    }
    //----------RENDER---------------
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Pressable onPress={() => navigation.goBack()} style={styles.headerImg}>
                    <Image source={Icons.IC_BACK_BUTTON}  />
                </Pressable>
                <Text style={styles.headerText}>Edit Product</Text>
            </SafeAreaView>
            <View style={styles.InnerContainer}>
                <Text style={styles.LabelText}>Product Image</Text>
                <Pressable style={styles.buttonImage} onPress={() => setModalVisible(true)} >
                    <Image source={productImage ? {uri: productImage} : Images.IC_PlaceHolder} style={styles.BtnImg}/>
                </Pressable>
                <Text style={styles.hintText}>Click on Image for upload or capture Image.</Text>
                <Text style={styles.LabelText}>Product Name</Text>
                <Input
                    style={styles.input}
                    placeholder={'Enter Product Name'}
                    value={name}
                    onChangeText={(text) => {
                        setName(text), setNameError('');
                    }}
                    errorMsg={nameError}
                    inputStyle={{ color: Colors.BLACK}}
                />
                <Text style={styles.LabelText}>Product Price</Text>
                <Input
                    style={styles.input}
                    placeholder={'Enter Price'}
                    value={price}
                    onChangeText={(text) => {
                        setPrice(text), setPriceError('');
                    }}
                    errorMsg={priceError}
                    inputStyle={{ color: Colors.BLACK}}
                />
                <Text style={styles.LabelText}>Product Offer Price</Text>
                <Input
                    style={styles.input}
                    placeholder={'Enter Offer Price'}
                    value={offerPrice}
                    onChangeText={(text) => {
                        setofferPrice(text), setOfferPriceError('');
                    }}
                    errorMsg={offerPriceError}
                    inputStyle={{ color: Colors.BLACK}}
                />
                <Pressable  onPress={() => onPressEditProduct()} style={styles.btnContainer}>
                    <Text style={styles.label}>Update Product</Text>
                </Pressable>
            </View>
            <Loader visible={isLoading} />
            <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                <TouchableOpacity style={styles.modalContainer} activeOpacity={0.7} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalBottomView}>
                        <View style={styles.grayBorder}></View>
                        <View style={styles.bottomButton}>
                            <TouchableOpacity style={styles.touchablePhoto} activeOpacity={0.7} onPress={() => onPressTakePhoto()}>
                                <Image source={Icons.Ic_Camera_square} style={styles.cameraImg} />
                                <Text style={styles.takPictureText}>{'Take a Picture'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchablePhoto} activeOpacity={0.7} onPress={() => onPressGallery()}>
                                <Image source={Icons.Ic_Gallery} style={styles.cameraImg} />
                                <Text style={styles.takPictureText}>{'Upload File from Device'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default EditProduct;