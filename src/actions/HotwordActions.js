import * as types from './actionTypes';
import hotwordApi from '../api/mockHotwordApi';

export function loadHotwordsSuccess(hotwords) {
  return { type: types.LOAD_HOTWORDS_SUCCESS, hotwords};
}

export function loadHotwords() {
  return function(dispatch) {
    return hotwordApi.getAllHotwords()
    .then(hotwords => {
      dispatch(loadHotwordsSuccess(hotwords));
    }).catch(error => {
      throw(error);
    });
  };
}
