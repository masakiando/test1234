import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function flashSaleReducer(
  state = initialState.saleproducts, action) {
  switch (action.type) {

    case types.LOAD_SALEPRODUCT_SUCCESS:
      return action.saleproducts;

      default:
        return state;
  }
}
