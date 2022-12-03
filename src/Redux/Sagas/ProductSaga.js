// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all, select } from 'redux-saga/effects';
// --------------- TYPES ---------------
import { Login, GetProducts, CreateProducts, DeleteProducts } from '../Types';
import { login, getProducts, addProducts, deleteProduct} from '../Actions';

import API from '../Services/Auth';

const loginSaga = function* loginSaga({ params }) {
    console.log('sagaparams-->', params)
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

function* productSaga() {
    yield all([
        takeEvery(Login.REQUEST, loginSaga),
    ]);
}

export default productSaga;