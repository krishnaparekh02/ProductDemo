import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';

let appReducer = combineReducers({
    Products: ProductReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;