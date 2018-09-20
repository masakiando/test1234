import React, {PropTypes} from 'react';
import CartListRow from './CartListRow';
import styled from 'styled-components';

const CartList = ({
  cart
}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>
          <input type="checkbox"/>
          <spna>ffffffffffffffff</spna>
        </th>
        <th>
          <Span>ssssssssssss</Span>
        </th>
      </tr>
      </thead>
      <tbody>
      {cart.map((item, i) =>
        <CartListRow
          key={i}
          item={item}
        />
      )}
      </tbody>
    </table>
  );
};

CartList.propTypes = {
  cart: PropTypes.array.isRequired
};

export default CartList;

const Span = styled.span`
"float: right;
`;
