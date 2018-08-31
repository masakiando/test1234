import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import GameForm from './GameForm';
// import { Redirect } from 'react-router-dom';
// import * as gameActions from '../../actions/gameActions';
// import toastr from 'toastr';

class SingleProduct extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      product: Object.assign({}, this.props.product)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product.id != nextProps.product.id) {
      this.setState({
        product: Object.assign({}, nextProps.product)
      });
    }
  }

  render() {
    return (
        <div>
          <div>{this.state.product.id}</div>
          <div>{this.state.product.product_name}</div>
        </div>
    );
  }
}

SingleProduct.propTypes = {
  product: PropTypes.object.isRequired
};

// SingleProduct.contextTypes = {
//   router: PropTypes.object
// };

function getProductsById(products, id) {
  const product = products.filter(product => product.id == id);
  if (product) return product[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const { products } = state;
  const paramsProductId = ownProps.params.id; // from the path get id

  let product = {};
  debugger;
  if (paramsProductId && products.length > 0) {
    product = getProductsById(products, paramsProductId);
  }
  return {
    product: product
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(gameActions, dispatch)
//   };
// }

export default connect(
  mapStateToProps,
  null//mapDispatchToProps
)(SingleProduct);
