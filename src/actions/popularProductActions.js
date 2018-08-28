//src/actions/FlashSaleActions.js
import * as types from './actionTypes';
import popularProductApi from '../api/mockPopularProductsApi';

export function loadPopularProductsSuccess(popularproducts) {
  return { type: types.LOAD_POPULAR_PRODUCT_SUCCESS, popularproducts};
}

export function popularProducts() {
  return function(dispatch) {
    return popularProductApi.getAllpopularProducts()
    .then(popularproducts => {
      dispatch(loadPopularProductsSuccess(popularproducts));
    }).catch(error => {
      throw(error);
    });
  };
}
