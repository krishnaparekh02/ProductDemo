// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all, select } from 'redux-saga/effects';
// --------------- TYPES ---------------
import { Login, Register, GetProducts, CreateProducts, DeleteProducts } from '../Types';
import { login, signup, getProducts, addProducts, deleteProduct} from '../Actions';

import API from '../Services/Auth';

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

function* productSaga() {
    yield all([
        takeEvery(Login.REQUEST, loginSaga),
        takeEvery(Register.REQUEST, registerSaga),
    ]);
}

export default productSaga;