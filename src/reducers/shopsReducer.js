import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function shopsReducer(state = initialState.shopIdList, action) {
  switch (action.type) {
    case types.ADD_ITEM_TO_SHOPID:
      return [
        ...state.filter(s => s.shopId !== action.item.shopId),
        Object.assign({}, action.item)
      ];
      default:
        return state;
  }
}
