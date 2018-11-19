import React, {PropTypes}   from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';//pk
import PAYMENT_SERVER_URL from './constants/server';//

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(`${PAYMENT_SERVER_URL}/api/payment`,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({
  name,
  description,
  amount
}) => {
  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={fromEuroToCent(amount)}
      token={onToken(amount, description)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  );
};

Checkout.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default Checkout;
