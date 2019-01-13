const getAddToCartAction = product => {
    return {
        type: 'ADD_TO_CART', 
        product
    };
};


const getRemoveFromCartAction = product => {
    return {
        type: 'REMOVE_FROM_CART', 
        product
    };
};



/*
const getLoadProductsAction = () => {
    const products = [
        { id: 1, name: "Hipster Ultimate", price: 301, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 101, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 151, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
    ];

    return {
        type: 'REPLACE_PRODUCTS',
        products
    };
};*/
const loadProductsAction = () => {
    // Esta función que recibe dispatch, es inyectada por redux-thunk.
    return async (dispatch, getState) => {
        let res = await fetch('http://localhost:3001/products')
        let products = await res.json();
        dispatch({
            type: "REPLACE_PRODUCTS",
            products
        })
    };
};



export {getAddToCartAction, getRemoveFromCartAction, loadProductsAction};