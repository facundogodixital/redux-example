import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCartAction } from '../actions/cartActions';
import { connect } from 'react-redux';


const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


// Hago destructuring en lugar de hacer " const ShoppingCart = (props) "
const ShoppingCart = ({cart, removeFromCart}) => {
  return (
    <Panel header="Shopping Cart">
      <Table fill>
        <tbody>
          {cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>

              {/* El método removeFromCart es inyectado a través de props por la función mapDispatchToProps del connect */}
              <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>

    </Panel>
  )
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
      dispatch(removeFromCartAction(product));
    }
  };
};


// Conecto el componente con React-Redux.
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShoppingCart);
