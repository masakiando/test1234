import * as types from './actionTypes';
import ProductApi from '../api/mockProductApi';
import axios from 'axios';

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
