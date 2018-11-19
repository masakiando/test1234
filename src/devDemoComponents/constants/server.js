const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://safe-brushlands-47729.herokuapp.com/'
  : 'http://localhost:3000';

export default PAYMENT_SERVER_URL;
