// Este es el store de Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';



//Ahore recibe la propiedad "products" del state, en lugar del state completo (por implementacion de combineReducers)
const productsReducer = (products=[], action) => {
    // Como estoy usando combineReducers, SOLO retorno el nuevo valor de la propiedad correspondiente del state, en lugar
    // de armar el state completo.
    // La propiedad que corresponde, se especifica al usar combineReducers, abajo al crear el store.

    switch (action.type){
        case 'REPLACE_PRODUCTS':
            // return {...state, products: action.products};  NO se usa si estoy usando combineReducers
            return action.products;
        default:
            return products;
    }
};



const cartReducer = (cart=[], action) => {
    switch (action.type){
        case 'ADD_TO_CART':
            return cart.concat(action.product)
        case 'REMOVE_FROM_CART':
            return cart.filter(product => product.id !== action.product.id)
        default:
            return cart;
    }
};





const logger = store => next => action => {
    console.log('Middleware: logger() -> Dispatching', action);
    let result = next(action);
    console.log('Middleware: logger() -> Next state', store.getState());
    return result;
}


const rootReducer = {
    cart: cartReducer, 
    products: productsReducer
};

export default createStore(combineReducers(rootReducer), applyMiddleware(logger, thunk));