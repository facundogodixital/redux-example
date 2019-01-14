// Este es el store de Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { cartReducer } from './reducers/cartReducer';
import { productsReducer } from './reducers/productsReducer';
import thunk from 'redux-thunk';





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