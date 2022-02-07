import { SELECTED_PRODUCTS, SET_PRODUCTS } from "../constants/productConstants"


export const setProducts = (products) =>{
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectProducts = (product) =>{
    return {
        type: SELECTED_PRODUCTS,
        payload: product
    }
}