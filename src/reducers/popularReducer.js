import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function popularPReducer(
  state = initialState.popularproducts, action) {
  switch (action.type) {

    case types.LOAD_POPULAR_PRODUCT_SUCCESS:
      return action.popularproducts;

      default:
        return state;
  }
}
