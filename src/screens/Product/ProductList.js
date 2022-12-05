// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Text, Pressable, ImageBackground, Image, Alert, RefreshControl, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { useFocusEffect } from '@react-navigation/native';

// --------------- ASSETS ---------------
import { Colors, Fonts, MainStyles, Images, Icons, Matrics } from '../../CommonConfig';
import { ProductListStyle as styles } from './Styles';
import { Input, NoData,Loader } from '../../Components/Common';
import { Popup } from '../../Helpers';
import firestore from '@react-native-firebase/firestore';
import { getProducts, deleteProduct } from '../../Redux/Actions';

const ProductList = ({ navigation }) => {
    const [productData, setProductData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [deleteLoader, setDeleteLoader] = React.useState(false);

     // --------------- REDUCER STATE ---------------
     const { Products } = useSelector((state) => state);
     const dispatch = useDispatch();

    //----------LIFECYCLE/ HOOKS---------------
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getProductsData();
        });

        return unsubscribe;
    }, [navigation]);

    React.useEffect(() => {
        if (isLoading && Products.isProductsSuccess == true) {
            setIsLoading(false);
            Popup.success(Products.successMsg);
            console.log('productdata', Products?.data?.productData);
            setProductData(Products?.data?.productData?.data);
        } else if (isLoading && Products.isProductsSuccess == false) {
            setIsLoading(false);
            Popup.error(Products.errorMsg);
        }
    },[Products.isProductsSuccess]);

    React.useEffect(() => {
        if (isLoading && Products.isProductDeletedSuccess == true) {
            setDeleteLoader(false);
            Popup.success(Products.successMsg);
            getProductsData();
        } else if (isLoading && Products.isProductDeletedSuccess == false) {
            setDeleteLoader(false);
            Popup.error(Products.errorMsg);
        }
    },[Products.isProductDeletedSuccess]);
    
    //----------METHOD---------------
    const getProductsData = async () => {
        setIsLoading(true);
        dispatch(getProducts.Request());
        // await firestore().collection('Products').where('userId', '==', global.userId).get()
        // .then(async (data) => {
        //     let productsData = [];
        //     data.forEach((product) => {
        //         let tempObj = {
        //             'product_data': product.data(),
        //             'pid': product.id
        //         }
        //         productsData.push(tempObj)
        //     });
        //     setIsLoading(false);
        //     setProductData(productsData);
        // })
        // .catch(error => {
        //     Popup.error(error.message);
        //     setIsLoading(false);
        // });
    }
    
    const deleteRow = (item) => {
        Alert.alert(
            "Delete",
            "Are you sure you want to delete the product?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => removeProduct(item) }
            ]
          );
    }

    const removeProduct = async (Item) => {
        setIsLoading(true);
        dispatch(deleteProduct.Request({Id: Item?.pid}));
        // await firestore()
        //     .collection('Products')
        //     .doc(Item?.pid)
        //     .delete()
        //     .then(() => {
        //         Popup.success('Product Deleted Successfully!');
        //         getProducts();
        //     })
        //     .catch(error => {
        //         Popup.error(error.message);
        //         setIsLoading(false);
        // });;
    }
    // --------------- UI METHODS ---------------
    const renderItem = React.useCallback(
        ({ item, index }) => {
            return (
                <SwipeRow
                    style={{ marginBottom: Matrics.vs(10) }}
                    disableRightSwipe={true}
                    closeOnRowOpen={true}
                    closeOnRowBeginSwipe={true}
                    closeOnScroll={true}
                    rightOpenValue={Matrics.s(-86)}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    recalculateHiddenLayout={true}
                >
                    
                    <Pressable
                        style={styles.deleteWrapper}
                        onPress={() => deleteRow(item)}
                    >
                        <Text style={styles.delText}>Delete</Text>
                    </Pressable>
                    <Pressable style={styles.itemInnerContainer} onPress={() => navigation.navigate('EditProduct',{selectedItem: item})}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={Images.IC_PlaceHolder}
                                style={styles.Img}
                            />
                            <Text style={styles.TitleText}>{item?.product_data?.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.priceTextLabel} numberOfLines={1}>Price: </Text>
                            <Text style={styles.priceText} numberOfLines={1}>₹ {parseInt(item?.product_data?.price).toFixed(2)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.priceTextLabel}>Offer Price: </Text>
                            <Text style={styles.priceText}>₹ {parseInt(item?.product_data?.offerPrice).toFixed(2)}</Text>
                        </View>
                    </Pressable>
                </SwipeRow>
            )
        }
    );

    //----------RENDER---------------
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Text style={styles.headerText}>Products</Text>
                <Pressable style={styles.btnAdd} onPress={() => {navigation.navigate('AddProduct')}}>
                    <Text style={styles.btnLabel}>Add Product</Text>
                </Pressable>
            </SafeAreaView>
            <View style={{ flex: 1 }}>
                <SwipeListView
                    contentContainerStyle={styles.swipeListStyle}
                    data={productData}
                    keyExtractor={(_, index) => `product-${index}`}
                    renderItem={renderItem}
                    closeOnRowOpen={true}
                    closeOnRowBeginSwipe={true}
                    closeOnScroll={true}
                    showsVerticalScrollIndicator={false}
                // refreshControl={
                //     <RefreshControl
                //         refreshing={isRefreshing}
                //         onRefresh={onRefresh}
                //         tintColor={Colors.BLACK}
                //     />
                // }
                />
            </View>
            <Loader visible={isLoading || deleteLoader} />
        </View>
    )
}

export default ProductList;