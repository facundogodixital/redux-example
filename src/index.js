import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';
import { loadProductsAction } from './actions/productsActions';
import { Provider } from 'react-redux';


////////////////////////////////////////////////////////////////////////////
// NO OLVIDAR CORRER "json-server -p3001 products.json" EN LA CONSOLA
////////////////////////////////////////////////////////////////////////////


store.dispatch(loadProductsAction());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
