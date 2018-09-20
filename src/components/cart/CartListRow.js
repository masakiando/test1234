import React, {PropTypes} from 'react';
import styled from 'styled-components';

const CartListRow = ({
  item
}) => {
    return (
    <Tr>
      <td><input type="checkbox"/></td>
      <td>{item.cover}</td>
      <td>{item.product_name}</td>
      <td>
        <select className="form-control">
          <option value="" disabled>Choose Your timezones</option>
          <option value="" disabled>AAA</option>
          <option value="" disabled>BBB</option>
          <option value="" disabled>CCC</option>
        </select>
      </td>
      <td>
        <div>
          <span>
            {item.sale_status === true ? <Span > ¥{item.price}</Span> : <span>¥{item.price}</span>}
          </span>
             {item.sale_status === true && <span>  ¥{item.discount_price}</span>}
        </div>
      </td>
      <td>f</td>
    </Tr>
  );
};

CartListRow.propTypes = {
  item: PropTypes.object.isRequired
};

export default CartListRow;
const Tr = styled.tr`
background-color: #fffefb;
`;
const Span = styled.span`
text-Decoration: line-through;
color: rgba(0,0,0,.5);
`;
