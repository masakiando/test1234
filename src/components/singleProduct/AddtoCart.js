import React, {PropTypes} from 'react';
// import cart from '../cart/cart-helper.js';

class AddtoCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.AddItem = this.AddItem.bind(this);
  }

  AddItem() {
    let cart = [];
    let item_id = this.props.item.id;
    console.log(item_id);
    let item_product_name = this.props.item.product_name;
    console.log(item_product_name);
    if (typeof window !== "undefined") {
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
      }
      cart.push({
        product: 'test',
        quantity: 1
      })
      localStorage.setItem('cart', JSON.stringify(cart))

    }
  }

  render() {
    return (
      <button className="btn-cart" onClick={this.AddItem}>
        <span>add to cart</span>
      </button>
    );
  }
}

AddtoCart.propTypes = {
  item: PropTypes.object.isRequired
};


export default AddtoCart;
