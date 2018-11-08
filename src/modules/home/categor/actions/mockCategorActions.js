import * as types from '../constans/actionTypes';
import CategorApi from '../api/mockCategorApi';

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_COVER_SUCCESS, categories};
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
