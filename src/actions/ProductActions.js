import * as types from './actionTypes';
import ProductApi from '../api/mockProductApi';
import SingleProductImgApi from '../api/singleProductApi';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCT_SUCCESS, products};
}


export function loadProducts() {
  return function(dispatch) {
    return ProductApi.getAllProducts()
    .then(Products => {
      dispatch(loadProductsSuccess(Products));
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadSingleProductImegeSuccess(img) {
  return { type: types.LOAD_SINGLE_PRODUCT_IMEGESUCCESS, img};
}

export function loadSingleProductImege(id) {
  return function(dispatch) {
    return SingleProductImgApi.getSingleProductImg(id)
    .then(img => {
      dispatch(loadSingleProductImegeSuccess(img));
    }).catch(error => {
      throw(error);
    });
  };
}
