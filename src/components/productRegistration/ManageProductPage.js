import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Component(React)とReduxの接続
import ProdcutForm from './ProdcutForm';

class AddProdcut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        product_name: '',
        product_discrption: '',
        category: ''
      },
      errors: {},
      saving: false
    };
    this.updateProductState = this.updateProductState.bind(this);
  }
  updateProductState(event) {
    const field = event.target.name;
    let product = this.state.product;
    product[field] = event.target.value;
    return this.setState({product: product});
  }

  render() {
    const {g_categories} = this.props;
    return (
      <ProdcutForm
        product={this.state.product}
        errors={this.state.errors}
        saving={this.state.saving}
        onChange={this.updateProductState}
        categories={g_categories}
      />
    );
  }
}

AddProdcut.propTypes = {
  g_categories: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    g_categories: state.g_categories
  };
}


export default connect(mapStateToProps, null)(AddProdcut);
