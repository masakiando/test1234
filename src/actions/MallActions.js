import * as types from './actionTypes';
import MallApi from '../api/mockMallApi';

export function loadMallsSuccess(malls) {
  return { type: types.LOAD_MALLS_SUCCESS, malls};
}

export function Malls() {
  return function(dispatch) {
    return MallApi.getAllMalls()
    .then(malls => {
      dispatch(loadMallsSuccess(malls));
    }).catch(error => {
      throw(error);
    });
  };
}
