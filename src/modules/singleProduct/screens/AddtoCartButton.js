import React, {PropTypes} from 'react';

const AddtoCart = ({
  onAdd
}) => {
  return (
    <button
      className="btn-cart" onClick={onAdd}>
      <span>add to cart</span>
    </button>
  );
};

AddtoCart.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddtoCart;
