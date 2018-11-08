import * as types from '../constans/actionTypes';
import Api from '../api/Api';

export function loadHotwordsSuccess(hotwords) {
  return { type: types.LOAD_HOTWORDS_SUCCESS, hotwords};
}

export function loadHotwords() {
  return function(dispatch) {
    return Api.getAllHotwords()
    .then(hotwords => {
      dispatch(loadHotwordsSuccess(hotwords));
    }).catch(error => {
      throw(error);
    });
  };
}
