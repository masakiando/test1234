import axios from 'axios';

export function buy(data) {
  return function (dispatch, getState) {
    return axios.post(
      '/api/buy', data);
  };
}
