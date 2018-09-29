import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DiscountMessage from './DiscountMessage';
import CartList from './CartList';

import styled from 'styled-components';

class CartPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false
    };
  } //.

  test2(shop) {
    // return ( <div>{shop.shopId}</div>);
    var result = this.props.cart.map( function( product, index, array ) {
      if( shop.shopId == product.shop_id ) {
          return (
            <div key={index}>
              <div>{product.product_name}</div>
              <div>{product.price}</div>

            </div>
          );
      }
    });

    return result;
  }

  test() {
    return this.props.shopIdList.map( (shop, index) => (
        <div key={index}>
          <div>{shop.shopId}</div>
          {this.test2(shop)}
        </div>
        )
    );
  }

  render() {
    const {cart, shopIdList} = this.props;

    return (
      <div>
        <Container>
           {this.test()}
           <DiscountMessage />
           <CartList cart={cart} shopIdList={shopIdList} />
        </Container>
      </div>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  shopIdList: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
    shopIdList: state.shopIdList
  };
}

export default connect(mapStateToProps, null)(CartPage);

const Container = styled.div`
width: 1200px;
margin-right: auto;
margin-left: auto;
padding: 1em 0em 0em 0em;
`;
