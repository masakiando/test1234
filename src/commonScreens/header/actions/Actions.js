import * as types from '../constans/actionTypes';
import setAuthenticationToken from '../../../utils/setAuthenticationToken';

// action create
// reducerは src/modules/login/reducers/Reducer.js にあります
export function setCurrentUser(user) {
  return { type: types.SET_CURRENT_USER, user };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthenticationToken(false);//login時、Request headersに追加したtokenを削除する
    dispatch(setCurrentUser({}));// storeのuser stateを空にする
  };
}
