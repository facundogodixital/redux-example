import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { getRemoveFromCartAction } from '../actionCreators';
import { connect } from 'react-redux';


const styles = {
  footer: {
    fontWeight: 'bold'
  }
}



// Podría ya, al haber implementado react-redux, dejar este componente como una función (solo presentacional).
// Ej: const ShoppingCart = (props) => { ... };

class ShoppingCart extends Component {


  // En este caso, al usar react-redux, no necesito implementar el constructor.
  /*
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }


    // Me subscribo al store, para que re-renderice el carrito de compras cuando haya un cambio de state.
    // Ese cambio de state, lo va a hacer el reducer, si se dispatchea la acción "ADD_TO_CART".
    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });

      console.log('Subscribe llamado | state actual: ', store.getState());
    });

    console.log('ShoppingCart::constructor | Subscribe realizado.');
  }
  */


  render() {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {/* 
              Ya NO uso el state del componente (this.state.cart), ya que react-redux inyecta el cart mediante props.
              (Usando el método mapStateToProps, tomo del state de redux los elementos que necesita el componente y 
              se los inyecta de forma automática a través de props).
            */}
            {this.props.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>

                {/* El método removeFromCart es inyectado a través de props por la función mapDispatchToProps del connect */}
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.props.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }


  //Este método también lo quito, ya que se lo paso mediante props usando la funcion "mapDispatchToProps" de react-redux.
  /*
  removeFromCart(product) {
    store.dispatch(getRemoveFromCartAction(product));
  }
  */


}

// Indica cómo transformar el state actual del store Redux en los props que desea pasar a un componente de presentación.
// En este caso, el componente ShoppingCart necesita recibir solamente el objeto "cart" del state como prop.
// La función recibe como parámetro de forma automática el store.state (parametro: "state")
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};


// Le inyecta al componente mediante props, los métodos que necesita.
// La función recibe como parámetro de forma automática el método store.dispatch (parametro: "dispatch")
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: product => {
      dispatch(getRemoveFromCartAction(product));
    }
  };
};


// Conecto el componente con React-Redux.
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShoppingCart);
