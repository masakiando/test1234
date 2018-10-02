import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  switch (action.type) {

  case types.BEGIN_AJAX_CALL:
    return state + 1;

  case types.END_AJAX_CALL:
    return state - 1;

  case types.AJAX_CALL_ERROR:
    return state - 1;

  default:
    return state;
  }
}
