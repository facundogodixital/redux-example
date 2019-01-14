// Este es el store de Redux
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
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

/* eslint-disable no-underscore-dangle */
export default createStore(
    combineReducers(rootReducer), 
    /* initialState */
    compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
/* eslint-enable */