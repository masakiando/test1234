import Api from '../api/mockApi';
import AuthorApi from '../api/mockAuthorApi';
import * as types from '../constans/actionTypes';

import {beginAjaxCall, endAjaxCall, ajaxCallError} from '../../../actions/ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  console.log('hello couse');
  console.log(course);
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function deleteCourseSuccess(courseId) {
  return {type: types.DELETE_COURSE_SUCCESS, courseId};
}

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}


export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return Api.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
      dispatch(endAjaxCall());
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return Api.saveCourse(course)
    .then(course => {
      course.id ?
      dispatch(updateCourseSuccess(course)) :
      dispatch(createCourseSuccess(course));
      dispatch(endAjaxCall());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteCourse(courseId) {

  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return Api.deleteCourse(courseId)
    .then(() => {
      dispatch(deleteCourseSuccess(courseId));
      dispatch(endAjaxCall());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function loadAuthors() {
  return dispatch => {
    // dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    })
    .catch(error => {
      throw(error);
    });
  };
}
