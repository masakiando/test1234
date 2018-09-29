import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import { loadHotwords } from './actions/HotwordActions';
import { Categories } from './actions/CategorActions';
import { loadProducts } from './actions/ProductActions';
import { saleProducts } from './actions/FlashSaleActions';
import { popularProducts } from './actions/popularProductActions';
import { Malls } from './actions/MallActions';
import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import setAuthenticationToken from './utils/setAuthenticationToken';
// import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import './styles/styles.scss';
import App from './components/App';
// import redux from './redux'; // redux check
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore();
store.dispatch(loadHotwords());
store.dispatch(Categories());
store.dispatch(loadProducts());
store.dispatch(saleProducts());
store.dispatch(popularProducts());
store.dispatch(Malls());

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
