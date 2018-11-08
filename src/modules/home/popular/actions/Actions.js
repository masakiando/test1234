import * as types from '../constans/actionTypes';
import Api from '../api/Api';

export function loadPopularProductsSuccess(popularproducts) {
  return { type: types.LOAD_POPULAR_PRODUCT_SUCCESS, popularproducts};
}

export function loadPopularProducts() {
  return function(dispatch) {
    return Api.getAllpopularProducts()
    .then(popularproducts => {
      dispatch(loadPopularProductsSuccess(popularproducts));
    }).catch(error => {
      throw(error);
    });
  };
}
