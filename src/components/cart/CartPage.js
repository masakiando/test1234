import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class CartPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false
    };
  } //.

  render() {
    const {cart} = this.props;

    return (
      <div>
        <h1>cart</h1>

      </div>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps, null)(CartPage);
