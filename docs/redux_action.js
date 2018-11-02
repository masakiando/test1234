/*
    Actions https://redux.js.org/basics/actions
*/

// action types import
import * as types from './actionTypes';
// action creators
export function addTodo(text) {
  return {type: types.ADD_TODO, text};
}
