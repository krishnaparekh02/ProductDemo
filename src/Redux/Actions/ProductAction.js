// --------------- TYPES ---------------
import { Login, Register, GetProducts, CreateProducts, DeleteProducts } from '../Types';

// --------------- ACTIONS ---------------
export const login = {
    Request: (params) => ({
        type: Login.REQUEST,
        params,
    }),
    Success: (data) => ({
        type: Login.SUCCESS,
        payload: data,
    }),
    Failed: (error) => ({
        type: Login.FAILED,
        payload: error,
    }),
};

export const signup = {
    Request: (params) => ({
        type: Register.REQUEST,
        params,
    }),
    Success: (data) => ({
        type: Register.SUCCESS,
        payload: data,
    }),
    Failed: (error) => ({
        type: Register.FAILED,
        payload: error,
    }),
};

export const getProducts = {
    Request: (params) => ({
        type: GetProducts.REQUEST,
        params,
    }),
    Success: (data) => ({
        type: GetProducts.SUCCESS,
        payload: data,
    }),
    Failed: (error) => ({
        type: GetProducts.FAILED,
        payload: error,
    }),
};

export const addProducts = {
    Request: (params) => ({
        type: CreateProducts.REQUEST,
        params,
    }),
    Success: (data) => ({
        type: CreateProducts.SUCCESS,
        payload: data,
    }),
    Failed: (error) => ({
        type: CreateProducts.FAILED,
        payload: error,
    }),
};

export const deleteProduct = {
    Request: (params) => ({
        type: DeleteProducts.REQUEST,
        params,
    }),
    Success: (data) => ({
        type: DeleteProducts.SUCCESS,
        payload: data,
    }),
    Failed: (error) => ({
        type: DeleteProducts.FAILED,
        payload: error,
    }),
};