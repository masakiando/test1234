/*
    Reducers https://redux.js.org/basics/reducers
*/

/*-- Reducers https://redux.js.org/basics/reducers --*/
import * as types from '.actionTypes';
import initState from './initialState';

// Provide CRUD (Create, Read, Update, Delete)
export default function xxxxxReducer(
  state = initState.xxxxx, action) {
  switch (action.type) {

    case types.CREATE:
      return [
        ...state,
        Object.assign({}, action.xxxxxs)
      ];

    case types.READ:
      return action.xxxxx;

    case types.UPDATE:
      return [
        ...state.filter(xxxxx => xxxxx.id !== action.xxxxx.id),
        Object.assign({}, action.xxxxx)
      ];

    case types.DELETE:
      return [
        ...state.filter(xxxxx => xxxxx.id !== action.xxxxxId)
      ];

      default:
        return state;
  }
}
