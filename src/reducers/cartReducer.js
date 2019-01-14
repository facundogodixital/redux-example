import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

export const cartReducer = (cart=[], action) => {
    switch (action.type){
        case ADD_TO_CART:
            return cart.concat(action.payload)
        case REMOVE_FROM_CART:
            return cart.filter(product => product.id !== action.payload.id)
        default:
            return cart;
    }
};