import { all } from "redux-saga/effects";
import ProductSaga from './ProductSaga';

const rootSaga = function* rootSaga() {
    yield all([ProductSaga()]);
};

export default rootSaga;