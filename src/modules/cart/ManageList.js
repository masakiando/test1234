import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import DiscountMessage from './screens/DiscountMessage';
import List from './screens/List';
import styled from 'styled-components';

class CartPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      saving: false
    };
    this.redirectToBuyPage = this.redirectToBuyPage.bind();
  } //.

  test2(shop) {
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

  redirectToBuyPage() {
    browserHistory.push('/buy');
  }

  render() {
    const {cart, shopIdList} = this.props;
    return (
      <div>
        <Container>
           {this.test()}
           <DiscountMessage />
           <List cart={cart} shopIdList={shopIdList} />
             <input
               type="submit"
               value="Buy"
               className=""
               onClick={this.redirectToBuyPage}/>
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
