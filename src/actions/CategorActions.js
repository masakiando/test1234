import * as types from './actionTypes';
import CategorApi from '../api/mockCategorApi';

export function loadCategoriesSuccess(categories) {

  return { type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function Categories() {
  return function(dispatch) {
    return CategorApi.getAllCategories()
    .then(Categories => {
      dispatch(loadCategoriesSuccess(Categories));
    }).catch(error => {
      throw(error);
    });
  };
}
