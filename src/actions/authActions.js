import axios from 'axios';
import setAuthenticationToken from '../utils/setAuthenticationToken';
import jwt from 'jsonwebtoken';
import * as types from './actionTypes';

export function setCurrentUser(user) {
  return {type: types.SET_CURRENT_USER, user};
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/acth', data).then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthenticationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
  };
}
