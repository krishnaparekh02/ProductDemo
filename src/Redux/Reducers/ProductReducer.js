// --------------- TYPES ---------------
import { Login, Register, GetProducts, CreateProducts, DeleteProducts } from '../Types';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
    error: null,
    errorMsg: '',
    successMsg: '',
    data: {},
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Login.REQUEST:
            return {
                ...state,
                isLoginSuccess: null,
                error: null,
                errorMsg: '',
                successMsg: ''
            };
        case Login.SUCCESS:
            return {
                ...state,
                isLoginSuccess: true,
                successMsg: 'User logged in successfully!',
                data: {
                    ...state.data,
                    userData: action.payload,
                },
            };
        case Login.FAILED:
            return {
                ...state,
                isLoginSuccess: false,
                error: action.payload,
                errorMsg: action.payload.message,
            };
        case Register.REQUEST:
            return {
                ...state,
                isRegisterSuccess: null,
                error: null,
                errorMsg: '',
                successMsg: ''
            };
        case Register.SUCCESS:
            return {
                ...state,
                isRegisterSuccess: true,
                successMsg: 'User logged in successfully!',
                data: {
                    ...state.data,
                    userData: action.payload,
                },
            };
        case Register.FAILED:
            return {
                ...state,
                isRegisterSuccess: false,
                error: action.payload,
                errorMsg: action.payload.message,
            };
        case GetProducts.REQUEST:
            return {
                ...state,
                isProductsSuccess: null,
                error: null,
                errorMsg: '',
                successMsg: ''
            };
        case GetProducts.SUCCESS:
            return {
                ...state,
                isProductsSuccess: true,
                successMsg: 'Products returns successfully!',
                data: {
                    ...state.data,
                    productData: action.payload,
                },
            };
        case GetProducts.FAILED:
            return {
                ...state,
                isProductsSuccess: false,
                error: action.payload,
                errorMsg: action.payload.message,
            };
        case DeleteProducts.REQUEST:
            return {
                ...state,
                isProductDeletedSuccess: null,
                error: null,
                errorMsg: '',
                successMsg: ''
            };
        case DeleteProducts.SUCCESS:
            return {
                ...state,
                isProductDeletedSuccess: true,
                successMsg: 'Product Deleted Successfully!',
                data: {
                    ...state.data,
                },
            };
        case DeleteProducts.FAILED:
            return {
                ...state,
                isProductDeletedSuccess: false,
                error: action.payload,
                errorMsg: action.payload.message,
            };
        default:
            return state;
    }
};