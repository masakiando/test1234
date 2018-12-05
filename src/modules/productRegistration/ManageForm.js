import React, { PropTypes }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions           from './actions/Actions';
import Form                   from './screens/Form';

class ManageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: Object.assign({}, this.props.product),
      errors: {},
      saving: false,
      attributeOptions: []
    };
    this.updateProductState = this.updateProductState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadCategories();
  }

  updateProductState(event) {
    debugger;
    const field = event.target.name;
    let product = this.state.product;
    product[field] = event.target.value;
    return this.setState({product: product});
  }

  updateState(state){
    this.setState(state);
  }

  render() {
    const {categories} = this.props;
    return (
      <Form
        product={this.state.product}
        errors={this.state.errors}
        saving={this.state.saving}
        onChange={this.updateProductState}
        categories={categories}
        updateState={this.updateState}
      />
    );
  }
}

ManageForm.propTypes = {
  actions: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
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
                  product_weight: 0,
                  product_packsize_r: 0,
                  product_packsize_d: 0,
                  product_packsize_c: 0,
                  product_delivery_time: 0,
                  product_statue: 'New',
                  product_sku: '',
                  classificationGroup_name: '',
                  classificationGroup_name2: '',
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
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageForm);
