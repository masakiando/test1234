/*
    Store dev https://redux.js.org/basics/store
    Store prod https://redux.js.org/basics/store
*/

/*-- Store dev https://redux.js.org/basics/store --*/
import { createStore, applyMiddleware, compose
}                                   from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware         from "redux-saga";
import thunk                        from 'redux-thunk';
import rootReducer                  from '../reducers';//index
import rootSaga                     from "../sagas/sagas";

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const Middleware = [
    thunk, sagaMiddleware, reduxImmutableStateInvariant()
  ];
  const store = createStore(
    rootReducer,
    initialState,
    compose( applyMiddleware(...Middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  /* eslint-enable */
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;

/*-- Store prod https://redux.js.org/basics/store --*/
import { createStore, applyMiddleware, compose
}                           from 'redux';
import createSagaMiddleware from "redux-saga";
import thunk                from 'redux-thunk';
import rootReducer          from '../reducers';
import rootSaga             from "../sagas/sagas";

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        sagaMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  sagaMiddleware.run(rootSaga);
}
export default configureStore;
