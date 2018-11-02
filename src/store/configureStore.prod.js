import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';

import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/sagas";

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const Middleware = [
    thunk, sagaMiddleware
  ];
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...Middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  /* eslint-enable */
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
