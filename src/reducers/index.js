import {combineReducers} from 'redux';

import hotwords     from '../modules/home/hotword/reducers/Reducer';
import categoriesCover     from '../modules/home/categor/reducers/Reducer';
import courses        from '../modules/course/reducers/Reducer';
import login          from '../modules/login/reducers/Reducer';
import img            from '../modules/singleProduct/reducers/productImagesReducer';
import shopIdStorage   from './shopIdStorageReducer';

import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import products from './productReducer';
import saleproducts from './flashSaleReducer';
import popularproducts from './popularReducer';
import malls from './mallReducer';


// import authentication from './authenticationReducer';
import flashMessages from './flashMessagesReducer';
// commmon useing(singleProduct, )
import cart from './itemsInCartReducer';

import g_categories from './g_CategorReducer';
import productImages from './imegesIdUrlProductReducer';

const rootReducer = combineReducers({
  courses: courses,
  authentication: login,
  g_categories: g_categories,
  authors: authors,
  productImages: productImages,
  shopIdStorage: shopIdStorage,
  cart,
  flashMessages,
  hotwords,
  categoriesCover: categoriesCover,
  products: products,
  saleproducts,
  popularproducts: popularproducts,
  malls: malls,
  img: img,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
