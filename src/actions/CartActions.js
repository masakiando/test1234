import * as types from './actionTypes';

export function addItemToCart(item) {
  console.log('hello action');
  return function(dispatch) {
    return dispatch({type: types.ADD_ITEM_TO_CART, item});
  };
}
