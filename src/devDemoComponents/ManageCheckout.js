import React, {PropTypes}   from 'react';
import Checkout             from './Checkout';

class ManageCheckout extends React.Component {
  render() {
    const {
      name,
      description,
      amount
    } = this.props;

    return (
      <Checkout
        name={name}
        description={description}
        amount={amount}
      />
  );
  }
}
ManageCheckout.defaultProps = {
  name: 'The Road to learn React',
  description: 'Only the Book',
  amount: 1
};
ManageCheckout.propTypes = {
  name:        PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount:      PropTypes.number.isRequired
};

export default ManageCheckout;
