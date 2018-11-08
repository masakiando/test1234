import * as types from '../constans/actionTypes';
import Api from '../api/Api';

export function loadsaleProductsSuccess(saleproducts) {
  return { type: types.LOAD_SALE_PRODUCT_SUCCESS, saleproducts};
}

export function saleProducts() {
  return function(dispatch) {
    return Api.getAllaleProducts()
    .then(saleproducts => {
      dispatch(loadsaleProductsSuccess(saleproducts));
    }).catch(error => {
      throw(error);
    });
  };
}
