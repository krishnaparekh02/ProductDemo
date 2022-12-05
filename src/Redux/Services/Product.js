import firestore from '@react-native-firebase/firestore';
const BASE_URL = '';

export default {
    getProducts: (params) => {
        console.log('uid-->', global.userId);
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
        console.log('params', params?.Id)
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
    }
}