import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../store';


const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
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

  render() {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }


  removeFromCart(product) {
    store.dispatch({
      type: 'REMOVE_FROM_CART',
      product 
    });
  }


}

export default ShoppingCart;
