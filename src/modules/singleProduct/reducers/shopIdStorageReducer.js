import * as types from '../constans/actionTypes';
import initialState from '../../../reducers/initialState';

export default function shopsReducer(state = initialState.shopIdStorage, action) {
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
