import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function hotwordReducer(state = initialState.hotwords, action) {
  switch (action.type) {

    case types.LOAD_HOTWORDS_SUCCESS:
      return action.hotwords;

      default:
        return state;
  }
}
