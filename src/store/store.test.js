import expect from 'expect';
import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as HotwordActions from '../actions/HotwordActions';
import thunk from 'redux-thunk';

describe('Store', function() {
  it('Should handle load hotwords', function() {
    // arrange
    const store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(thunk))
    );

    // act
    const action = HotwordActions.loadHotwords();
    store.dispatch(action);

    // assert
    const getStateTest = function () {
      const actual = store.getState().hotwords[0];
      const expected = {
        id: "1",
        label: "label_1",
        cover: "hotword_1.80.110.png"
      };
      // console.log(actual);
      expect(actual).toEqual(expected);
    };
    setTimeout(getStateTest, 3000);

  });
});
