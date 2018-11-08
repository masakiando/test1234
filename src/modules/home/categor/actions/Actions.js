import * as types from '../constans/actionTypes';
import CategoriesCover from '../api/Api';

export function loadCategoriesCoverSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_COVER_SUCCESS, categories};
}

export function loadCategoriesCover() {
  return function(dispatch) {
    return CategoriesCover.getCategoriesCover()
    .then(Categories => {
      dispatch(loadCategoriesCoverSuccess(Categories));
    }).catch(error => {
      throw(error);
    });
  };
}
