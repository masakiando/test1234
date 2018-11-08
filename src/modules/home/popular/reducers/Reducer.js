import * as types from '../constans/actionTypes';
import initialState from '../../../../reducers/initialState';

export default function popularReducer(
  state = initialState.popularproducts, action) {
  switch (action.type) {

    case types.LOAD_POPULAR_PRODUCT_SUCCESS:
      return action.popularproducts;

      default:
        return state;
  }
}
