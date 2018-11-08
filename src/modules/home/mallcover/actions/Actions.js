import * as types from '../constans/actionTypes';
import Api from '../api/Api';

export function loadMallsCoverSuccess(malls) {
  return { type: types.LOAD_MALLS_COVER_SUCCESS, malls};
}

export function loadMallsCover() {
  return function(dispatch) {
    return Api.getAllMalls()
    .then(malls => {
      dispatch(loadMallsCoverSuccess(malls));
    }).catch(error => {
      throw(error);
    });
  };
}
