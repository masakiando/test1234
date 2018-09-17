import {combineReducers} from 'redux';
import hotwords from './hotwordReducer';
import categories from './CategorReducer';
import products from './productReducer';
import saleproducts from './flashSaleReducer';
import popularproducts from './popularReducer';
import malls from './mallReducer';
import img from './productImagesReducer';
import authentication from './authenticationReducer';
import flashMessages from './flashMessagesReducer';

const rootReducer = combineReducers({
  flashMessages,
  authentication,
  hotwords,
  categories: categories,
  products: products,
  saleproducts,
  popularproducts: popularproducts,
  malls: malls,
  img: img
});

export default rootReducer;
