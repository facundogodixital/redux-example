import { REPLACE_PRODUCTS } from '../actions/types';

//Ahore recibe la propiedad "products" del state, en lugar del state completo (por implementacion de combineReducers)
export const productsReducer = (products=[], action) => {
    // Como estoy usando combineReducers, SOLO retorno el nuevo valor de la propiedad correspondiente del state, en lugar
    // de armar el state completo.
    // La propiedad que corresponde, se especifica al usar combineReducers, abajo al crear el store.

    switch (action.type){
        case REPLACE_PRODUCTS:
            // return {...state, products: action.products};  NO se usa si estoy usando combineReducers
            return action.payload;
        default:
            return products;
    }
};
