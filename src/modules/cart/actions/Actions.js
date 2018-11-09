import * as types from '../constans/actionTypes';

export function addItemToCart(item) {
  return function(dispatch) {
    return dispatch({type: types.ADD_ITEM_TO_CART, item});
  };
}
