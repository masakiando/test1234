import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Component(React)とReduxの接続
import ProdcutForm from './ProdcutForm';

class ManageProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: Object.assign({}, this.props.product),
      errors: {},
      saving: false,
      attributeOptions: []
    };
    this.updateProductState = this.updateProductState.bind(this);
  }
  updateProductState(event) {
    const field = event.target.name;
    let product = this.state.product;
    product[field] = event.target.value;
    return this.setState({product: product});
  }

  updateState(state){
    this.setState(state);
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
        updateState={this.updateState.bind(this)}
      />
    );
  }
}

ManageProductPage.propTypes = {
  product: PropTypes.object.isRequired,
  g_categories: PropTypes.array.isRequired
};

function getProductById(products, id) {
  const product = products.filter(product => product.id == id);
  if (product) return product[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.id;
  let product = {
                  product_name: '',
                  product_discrption: '',
                  product_price: 0,
                  product_stock: 0,
                  classificationGroup_name: '',
                  categoryList1_name: '',
                  categoryList1_id: '',
                  categoryList2_name: '',
                  categoryList2_id: '',
                  categoryList3_naem: '',
                  categoryList3_id: '',
                  attribute_key_name: ''
              };
  if( productId && state.product.length > 0 ) {
    product = getProductById(state.product, productId);
  }
  return {
    product: product,
    g_categories: state.g_categories
  };
}

export default connect(mapStateToProps, null)(ManageProductPage);
