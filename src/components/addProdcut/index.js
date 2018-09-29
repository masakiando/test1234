import React, {PropTypes} from 'react';
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
    return (
      <ProdcutForm
        product={this.state.product}
        errors={this.state.errors}
        saving={this.state.saving}
        onChange={this.updateProductState}
      />
    );
  }
}

export default AddProdcut;
