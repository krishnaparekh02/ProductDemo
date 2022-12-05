import firestore from '@react-native-firebase/firestore';
const BASE_URL = '';

export default {
    getProducts: (params) => {
        return firestore().collection('Products').where('userId', '==', global.userId).get()
        .then(async (data) => {
            let productsData = [];
            data.forEach((product) => {
                let tempObj = {
                    'product_data': product.data(),
                    'pid': product.id
                }
                productsData.push(tempObj)
            });
            return {
                status: true,
                data: productsData,
            }
        })
        .catch(error => {
            return {
                status: false,
                data: error.message,
            }
        });
    },
    deleteProduct: (params) => {
        return firestore()
            .collection('Products')
            .doc(params?.Id)
            .delete()
            .then(() => {
                return {
                    status: true,
                }
            })
            .catch(error => {
                return {
                    status: false,
                    data: error.message,
                }
        });
    },
    addProduct: (params) => {
        return firestore()
        .collection("Products")
        .add(params)
        .then(async () => {
            return {
                status: true,
            }
        })
        .catch(error => {
            return {
                status: false,
                data: error.message,
            }
        });
    },
    editProduct: (params) => {
        const productObj = {
            "userId": params?.userId,
            "name": params?.name,
            "price": params?.price,
            "offerPrice": params?.offerPrice,
            "image": params?.image
        }
        console.log('productObj', productObj)
        console.log('pid', params?.pid)

        return firestore()
        .collection("Products")
        .doc(params?.pid)
        .update(productObj)
        .then(async () => {
            console.log('in then')
            return {
                status: true,
            }
        })
        .catch(error => {
            console.log('in else')
            return {
                status: false,
                data: error.message,
            }
        });
    }
}