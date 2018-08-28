"use stridt";
// store  ni  oku
import {createStore,compose, applyMiddleware, combineReducers} from 'redux';
// reducer  ni  oku
// import {combineReducers} from 'redux';
//  kaku reducer  ni oku
import initialState from './reducers/initialState';
import thunk from 'redux-thunk';

//mock api
const delay = 0;

const mock_courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function getAllCourses() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Object.assign([], mock_courses));
    }, delay);
  });
}
//Reducer
const courses = function(
  state = initialState.courses, action) {
  switch (action.type) {//(6)
    case "LOAD_COURSES_SUCCESS":
      return action.courses;

    case "CREATE_COURSE_SUCCESS"://(7)
      return [
        ...state,
        Object.assign({}, action.course)
      ];

  }
    return state;
};

const rootReducer = combineReducers({
  courses: courses//(5)
});

//store no create
const store = createStore(
  rootReducer,//(4)
  initialState,
  compose(
  applyMiddleware(
    thunk
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f)
);
//store  henkou  go  noatai wo  syutoku check
store.subscribe(function () {
  console.log(store.getState());
});

//actionCreators
function createCourseSuccess(course) {
  //action wo create suru
  return {type: "CREATE_COURSE_SUCCESS", course};//(2)
}

function loadCoursesSuccess(courses) {
  return { type: "LOAD_COURSES_SUCCESS", courses};
}

//action middleware
function load() {
  return function(dispatch) {
    return getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}


// react components
let new_course = {
              id: '1',
              title: 'hello redux',
              category: 'word'
            };

const save_test = function () {
  store.dispatch(createCourseSuccess(new_course));//(1)(3)
};
setTimeout(save_test, 3000);

store.dispatch(load());//(1)(3)
