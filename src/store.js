// Este es el store de Redux

import { createStore, applyMiddleware } from 'redux';


const reducer = (state, action) => {
    console.log('Reducer llamado. State inicial:', state, '. Action: ', action);


    if (action.type==='ADD_TO_CART') {
        // Retorno un nuevo state con el producto
        const newState = {
            ...state,
            cart: state.cart.concat(action.product)
        };
        // console.log('Reducer llamado. Nuevo state:', newState);
        return newState; 
    }
    else if (action.type==='REMOVE_FROM_CART') {
        // Retorno un nuevo state SIN el producto
        const newState = {
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id)
        };
        // console.log('Reducer llamado. State nuevo:', newState);
        return newState; 
    }

    return state;
};


const logger = store => next => action => {
  console.log('Middleware: logger() -> Dispatching', action);
  let result = next(action);
  console.log('Middleware: logger() -> Next state', store.getState());
  return result;
}


const initialState = { cart: [] };
export default createStore(reducer, initialState, applyMiddleware(logger));