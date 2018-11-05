import axios from 'axios';
import setAuthenticationToken from '../../../utils/setAuthenticationToken';
import jwtDecode from 'jwt-decode';

// actionTypes
const SET_CURRENT_USER = 'SET_CURRENT_USER';

// action create
export function setCurrentUser(user) {
  return {type: SET_CURRENT_USER, user};
}

// thunk middle
export function login(data) {
  return dispatch => {
    return axios.post('/api/acth', data).then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthenticationToken(token);
      console.log(jwtDecode(token)); //node net,dns jwt.signしたtokenをdecodeで元に戻す
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthenticationToken(false);//login時、Request headersに追加したtokenを削除する
    dispatch(setCurrentUser({}));// storeのuser stateを空にする
  };
}
