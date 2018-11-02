import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
//mock
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import { loadHotwords } from './actions/HotwordActions';
import { Categories } from './actions/mockCategorActions';
import { loadProducts } from './actions/ProductActions';
import { saleProducts } from './actions/FlashSaleActions';
import { popularProducts } from './actions/popularProductActions';
import { Malls } from './actions/MallActions';
//Genuine
import { loadCategories } from './actions/categorActions';
import routes from './routes';

import setAuthenticationToken from './utils/setAuthenticationToken';
// jwt
// import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
//styles
// import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import './styles/styles.scss';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import App from './components/App';
// import redux from './redux'; // redux check

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadHotwords());
store.dispatch(Categories());
store.dispatch(loadProducts());
store.dispatch(saleProducts());
store.dispatch(popularProducts());
store.dispatch(Malls());

store.dispatch(loadCategories());

//リロード時localStorageにjwtTokenあれば
//axios.defaults.headers.common Request headersにBearer追加
//jwtTokenをdecodeしそのユーザーデータをstoreに保管する
if (localStorage.jwtToken) {
  setAuthenticationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

render(
    <Provider store={store}>
      <Router
        history={browserHistory}
        routes={routes}
      />
  </Provider>,
  document.getElementById('app')
);
