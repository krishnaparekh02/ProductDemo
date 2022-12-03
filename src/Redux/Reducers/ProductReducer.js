// --------------- TYPES ---------------
import { Login, GetProducts, CreateProducts, DeleteProducts } from '../Types';

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
                successMsg: 'User Login successfully',
                data: {
                    ...state.data,
                    newsData: action.payload,
                },
            };
        case Login.FAILED:
            return {
                ...state,
                isLoginSuccess: false,
                error: action.payload,
                errorMsg: action.payload.message,
            };
        default:
            return state;
    }
};