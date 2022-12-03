// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all, select } from 'redux-saga/effects';
// --------------- TYPES ---------------
import { Login, GetProducts, CreateProducts, DeleteProducts } from '../Types';
import { login, getProducts, addProducts, deleteProduct} from '../Actions';

import API from '../Services/Product';

const loginSaga = function* loginSaga({ params }) {
    console.log('sagaparams-->', params)
    try {
        const response = yield call(API.Product.Login, params);
        if (response?.status != 'ok') {
            throw new Error(response?.message ?? '');
        }
        yield put(getTopHeadlines.Success(response));
    } catch (error) {
        yield put(getTopHeadlines.Failed(error));
    }
};

function* eventSaga() {
    yield all([
        takeEvery(GetTopHeadlines.REQUEST, loginSaga),
    ]);
}

export default eventSaga;