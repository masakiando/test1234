import ProductImagesMockApi from '../api/ProductImagesMockApi';
import axios from 'axios';

// actionTypes
const LOAD_SINGLE_PRODUCT_IMEGESUCCESS = 'LOAD_SINGLE_PRODUCT_IMEGESUCCESS';
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const ADD_ITEM_TO_SHOPID = 'ADD_ITEM_TO_SHOPID';

export function loadSingleProductImegeSuccess(img) {
  return { type: LOAD_SINGLE_PRODUCT_IMEGESUCCESS, img};
}

export function addItemToCart(item) {
  return function(dispatch) {
    return dispatch({type: ADD_ITEM_TO_CART, item});
  };
}

export function addItemShopId(Id) {
  var item = new Object();
  item.shopId = Id;
  return function(dispatch) {
    return dispatch( { type: ADD_ITEM_TO_SHOPID, item } );
  };
}

export function loadSingleProductImege(id) {
  return function(dispatch) {
    return ProductImagesMockApi.getSingleProductImg(id)
    .then(img => {
      dispatch(loadSingleProductImegeSuccess(img));
    }).catch(error => {
      throw(error);
    });
  };
}
