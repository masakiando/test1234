import {combineReducers} from 'redux';

import popularproducts  from '../modules/home/popular/reducers/Reducer';
import malls            from '../modules/home/mallcover/reducers/Reducer';
import saleproducts     from '../modules/home/flashsale/reducers/Reducer';
import hotwords         from '../modules/home/hotword/reducers/Reducer';
import categoriesCover  from '../modules/home/categor/reducers/Reducer';
import courses          from '../modules/course/reducers/Reducer';
import authors          from '../modules/course/reducers/authorReducer';
import login            from '../modules/login/reducers/Reducer';
import categories       from '../modules/productRegistration/reducers/Reducer';
import productImages    from '../modules/productRegistration/reducers/imegesIdUrlProductReducer';
import img              from '../modules/singleProduct/reducers/productImagesReducer';
import shopIdStorage    from '../modules/singleProduct/reducers/shopIdStorageReducer';
import cart             from '../modules/singleProduct/reducers/itemsInCartReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';
import products from './productReducer';
import flashMessages from './flashMessagesReducer';

const rootReducer = combineReducers({
  courses: courses,
  authentication: login,
  categories: categories,
  authors: authors,
  productImages: productImages,
  shopIdStorage: shopIdStorage,
  cart,
  flashMessages,
  hotwords,
  categoriesCover: categoriesCover,
  products: products,
  saleproducts: saleproducts,
  popularproducts: popularproducts,
  malls: malls,
  img: img,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
