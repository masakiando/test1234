/*
   Redux Thunk https://github.com/reduxjs/redux-thunk
*/

// XMLHttpRequest >>> action function
export function youFunctionName(id) {
  return (dispatch, getState) => {
    return XMLHttpRequest//axios or fatch etc
    .then(res => {
      dispatch(XXXXXXXXXX(response.data));
    })
    .catch(error => {
      throw(error);
    });
  };
}

// async >>> action function
function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
