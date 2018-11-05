import React, {PropTypes} from 'react';
import styled from 'styled-components';

const CartListRow = ({
  product
}) => {
    return (
    <Tr>
      <td><input type="checkbox"/></td>
      <td>{product.products_cover}</td>
      <td>{product.product_name}</td>
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
            {product.sale_status === true ? <Span > Â¥{product.price}</Span> : <span>Â¥{product.price}</span>}
          </span>
             {product.sale_status === true && <span>  Â¥{product.discount_price}</span>}
        </div>
      </td>
      <td>f</td>
      <td>f</td>
      <td>Þûð¶</td>
    </Tr>
  );
};

CartListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default CartListRow;
const Tr = styled.tr`
background-color: #fffefb;
`;
const Span = styled.span`
text-Decoration: line-through;
color: rgba(0,0,0,.5);
`;
