import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default  function imegesIdUrlProductReducer(
  state = initialState.productImages, action) {
  switch (action.type) {
    case types.CREATE_PRODUCT_IMAGES_SUCCESS:
      return action.imegesIdUrl;

      default:
        return state;
  }
}
