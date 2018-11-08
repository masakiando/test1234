import * as types from '../constans/actionTypes';
import initialState from '../../../../reducers/initialState';

export default  function mallReducer(
  state = initialState.malls, action) {
  switch (action.type) {

    case types.LOAD_MALLS_COVER_SUCCESS:
      return action.malls;

      default:
        return state;
  }
}
