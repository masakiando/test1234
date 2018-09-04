import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default  function mallReducer(

  state = initialState.malls, action) {
    debugger;
  switch (action.type) {

    case types.LOAD_MALLS_SUCCESS:
      return action.malls;

      default:
        return state;
  }
}
