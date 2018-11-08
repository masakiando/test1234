import * as types from '../constans/actionTypes';
import initialState from '../../../../reducers/initialState';

export default  function categorCoverReducer(state = initialState.hotwords, action) {
  switch (action.type) {

    case types.LOAD_CATEGORIES_COVER_SUCCESS:
      return action.categories;

      default:
        return state;
  }
}
