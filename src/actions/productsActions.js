import { REPLACE_PRODUCTS } from './types';


export const loadProductsAction = () => {
    // Esta función que recibe dispatch, es inyectada por redux-thunk.
    return async (dispatch, getState) => {
        let res = await fetch('http://localhost:3001/products')
        let products = await res.json();
        dispatch({
            type: REPLACE_PRODUCTS,
            payload: products
        })
    };
};
