// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all, select } from 'redux-saga/effects';
// --------------- TYPES ---------------
import { Login, Register, GetProducts, CreateProducts, DeleteProducts } from '../Types';
import { login, signup, getProducts, addProducts, deleteProduct} from '../Actions';

import API from '../Services/Auth';
import ProductAPI from '../Services/Product';

const loginSaga = function* loginSaga({ params }) {
    try {
        const response = yield call(API.Login, params);
        console.log('res-->', response)
        if (response?.status != true) {
            throw new Error(response?.message ?? '');
        }
        yield put(login.Success(response));
    } catch (error) {
        yield put(login.Failed(error));
    }
};

const registerSaga = function* registerSaga({ params }) {
    try {
        const response = yield call(API.register, params);
        console.log('signupres-->', response)
        if (response?.status != true) {
            throw new Error(response?.message ?? '');
        }
        yield put(signup.Success(response));
    } catch (error) {
        yield put(signup.Failed(error));
    }
};

const getProductSaga = function* getProductSaga() {
    try {
        const response = yield call(ProductAPI.getProducts);
        if (response?.status != true) {
            throw new Error(response?.message ?? '');
        }
        yield put(getProducts.Success(response));
    } catch (error) {
        yield put(getProducts.Failed(error));
    }
};

const DeleteProductSaga = function* DeleteProductSaga({params}) {
    try {
        const response = yield call(ProductAPI.deleteProduct,params);
        console.log('signupres-->', response)
        if (response?.status != true) {
            throw new Error(response?.message ?? '');
        }
        yield put(deleteProduct.Success(response));
    } catch (error) {
        yield put(deleteProduct.Failed(error));
    }
};

function* productSaga() {
    yield all([
        takeEvery(Login.REQUEST, loginSaga),
        takeEvery(Register.REQUEST, registerSaga),
        takeEvery(GetProducts.REQUEST, getProductSaga),
        takeEvery(DeleteProducts.REQUEST, DeleteProductSaga),
    ]);
}

export default productSaga;