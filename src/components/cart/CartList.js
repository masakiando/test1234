import React, {PropTypes} from 'react';
import CartListRow from './CartListRow';
import styled from 'styled-components';

const CartList = ({
  cart, shopIdList
}) => {
  return (
    <table className="">
      <thead>
        <tr>
          <th><input type="checkbox"/></th>
          <th>製品</th>
          <th>NA</th>
          <th>NA</th>
          <th>単価</th>
          <th>数量</th>
          <th>金額</th>
          <th>アクション</th>
        </tr>
      </thead>

      <thead>
        <tr>
          <th><input type="checkbox"/></th>
          <th>NA</th>
          <th>NA</th>
          <th>NA</th>
          <th>NA</th>
          <th>NA</th>
          <th>NA</th>
          <th>NA</th>
        </tr>
      </thead>

      <tbody>
      {cart.map((product, i) =>
        <CartListRow
          key={i}
          product={product}
        />
      )}
      </tbody>
      <span>₫200000以上のご注文で送料無料（最高40,000円）</span>
    </table>
  );
};

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
  shopIdList: PropTypes.array.isRequired
};

export default CartList;

const Span = styled.span`
"float: right;
`;

// {shopIdList.map((shop, i) =>
//   <div key={i}> {shop.shopId}</div>
// )}
