//src/actions/FlashSaleActions.js
import * as types from './actionTypes';
import saleProductApi from '../api/mockFlashSaleApi';

export function loadsaleProductsSuccess(saleproducts) {

  return { type: types.LOAD_SALEPRODUCT_SUCCESS, saleproducts};
}

export function saleProducts() {
  return function(dispatch) {
    return saleProductApi.getAllaleProducts()
    .then(saleproducts => {
      dispatch(loadsaleProductsSuccess(saleproducts));
    }).catch(error => {
      throw(error);
    });
  };
}
