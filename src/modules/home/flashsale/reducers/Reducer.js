import * as types from '../constans/actionTypes';
import initialState from '../../../../reducers/initialState';

export default function flashSaleReducer(
  state = initialState.saleproducts, action) {
  switch (action.type) {

    case types.LOAD_SALE_PRODUCT_SUCCESS:
      return action.saleproducts;

      default:
        return state;
  }
}
