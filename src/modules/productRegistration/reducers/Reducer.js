import * as types from '../constans/actionTypes';
import initialState from '../../../reducers/initialState';

export default function categorReducer(state = initialState.categories, action) {
  switch (action.type) {

    case types.LOAD_CATEGORIES_SUCCESS:
      return action.categories;

      default:
        return state;
  }
}
