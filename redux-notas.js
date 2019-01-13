
STORE 

- Mantiene el estado de la app de forma centralizada.
- Permite que los suscriptores se registren mediante subscribe.
- Permite el acceso al estado a través de getState().
- Permite que el estado sea actualizado a través del método dispatch(fn).
- Se crea con createStore(fnReductora)

|-----------------------------------------------------------|
| STORE                                                     |
|-----------------------------------------------------------|
| - state: {}                                               |
|-----------------------------------------------------------|
| + subscribe(fn)                                           |
| + dispatch(action)                                        |
| + getState()                                              |
|-----------------------------------------------------------|


Ejemplos:

// Me subscribo al store, hago que renderice de nuevo el componente
store.subscribe(() => {
    this.setState({
        var1: 'lalala mukenio'
    });
});


// Lanzo action
store.dispatch({
    type: 'ADD_TO_CART', 
    payload: {product: product}
});


// Función reductora
// El store invoca a la función reductora siempre que recibe un llamado al método dispatch()
const fn = (prevState, action) => {
    // return newState
};


// Action creators
// Son funciones que retornan un action, conviene utilizarlos por practicidad y porque ermite agregar lógica adicional.
const addToCartAction = (product) => {
    return {
        type: 'ADD_TO_CART', 
        payload: product
    };
}
store.dispatch(addToCartAction(product));