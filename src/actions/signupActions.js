import axios from 'axios';

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  };
}

export function userSignupRequest(userData) {
  debugger;
  return dispatch => {
    console.log(userData);
    return axios.post('/api/users', userData);
  };
}
