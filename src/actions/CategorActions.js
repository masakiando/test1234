import * as types from './actionTypes';
import axios from 'axios';

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_G_CATEGORIES_SUCCESS, categories };
}

export function loadCategories() {
  return function(dispatch) {
    return axios.get('/categories')
    .then(res => {
      const categories = res.data;
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  };
}
