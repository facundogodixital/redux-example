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


export {getAddToCartAction, getRemoveFromCartAction};