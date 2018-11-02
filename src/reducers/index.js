import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import hotwords from './hotwordReducer';
import categories from './CategorReducer';
import products from './productReducer';
import saleproducts from './flashSaleReducer';
import popularproducts from './popularReducer';
import malls from './mallReducer';
import img from './productImagesReducer';
import authentication from './authenticationReducer';
import flashMessages from './flashMessagesReducer';
import cart from './cartReducer';
import shopIdList from './shopsReducer';
import g_categories from './g_CategorReducer';
import productImages from './imegesIdUrlProductReducer';

const rootReducer = combineReducers({
  g_categories: g_categories,
  courses: courses,
  authors: authors,
  productImages: productImages,
  shopIdList: shopIdList,
  cart,
  flashMessages,
  authentication,
  hotwords,
  categories: categories,
  products: products,
  saleproducts,
  popularproducts: popularproducts,
  malls: malls,
  img: img,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
