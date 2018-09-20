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

  render() {
    const {cart} = this.props;

    return (
      <div>
        <Container>
           <DiscountMessage />

           <table className="table">
             <thead>
             <tr>
               <th>
                 <input type="checkbox"/>
               </th>
               <th>Title</th>
               <th>Author</th>
               <th>Category</th>
               <th>Length</th>
               <th>aaaaa</th>
             </tr>
             </thead>
           </table>

           <CartList cart={cart}/>
            <span>₫200000以上のご注文で送料無料（最高40,000円）</span>
        </Container>
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

const Container = styled.div`
width: 1200px;
margin-right: auto;
margin-left: auto;
padding: 1em 0em 0em 0em;
`;
