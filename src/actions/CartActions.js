import * as types from './actionTypes';

export function addItemToCart(item) {
  return function(dispatch) {
    return dispatch({type: types.ADD_ITEM_TO_CART, item});
  };
}

export function addItemShopId(Id) {
  var item = new Object();
  item.shopId = Id;
  return function(dispatch) {
    return dispatch( { type: types.ADD_ITEM_TO_SHOPID, item } );
  };
}
