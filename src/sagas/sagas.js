import { takeEvery } from 'redux-saga';
import 'babel-polyfill';
import axios from 'axios';
import  { call, put } from 'redux-saga/effects';

const url = "https://jsonplaceholder.typicode.com/posts";
export function* createhello(action) {
  try {
    console.log('try');
    const response = yield call(axios.post, url, {section_id: action.id});
    console.log(response);
  } catch (e) {
    console.log('catch');
  } finally {
    console.log('finally');
  }
}
export function* watchCreateLesson() {
  yield takeEvery('ADD_ITEM_TO_CART', createhello);
  console.log('redux-saga running hello...');
}

export default function* rootSaga() {
  yield [
    watchCreateLesson()
  ];
}
