import isEmpty from 'lodash/isEmpty';

/* initialState */ const authentication = [];
/* actionTypes  */ const SET_CURRENT_USER = 'SET_CURRENT_USER';

// reducer
export default function authenticationReducer(
  state = authentication, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
          isAuthenticated: !isEmpty(action.user),
          user: action.user
      };
    default: return state;
  }
}