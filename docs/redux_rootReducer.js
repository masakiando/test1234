/*
    combineReducers https://redux.js.org/basics/reducers
*/

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  categories: categories,
  authors: authors,
});

export default rootReducer;
