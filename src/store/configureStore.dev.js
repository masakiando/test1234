import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';//index
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
// import rootSaga from "../sagas";
function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        sagaMiddleware,
        reduxImmutableStateInvariant()
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  // sagaMiddleware.run(rootSaga);
}
export default configureStore;
