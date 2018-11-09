import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// App Root
import App from './components/App';

//
import { loadCategoriesCover } from './modules/home/categor/actions/Actions';
import { loadHotwords }        from './modules/home/hotword/actions/Actions';
import { saleProducts }        from './modules/home/flashsale/actions/Actions';
import { loadMallsCover }      from './modules/home/mallcover/actions/Actions';
import { loadPopularProducts } from './modules/home/popular/actions/Actions';
import { loadProducts }        from './actions/ProductActions';
import setAuthenticationToken  from './utils/setAuthenticationToken';

//devDemoComponents
import { loadCourses,
         loadAuthors }         from './devDemoComponents/course/actions/Actions';

// jwt
// import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './modules/login/actions/Actions';

// styles
import '@blueprintjs/core/dist/blueprint.css';
import './styles/styles.scss';
import '../node_modules/toastr/build/toastr.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'normalize.css/normalize.css';

//
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
// home page
store.dispatch(loadCategoriesCover());
store.dispatch(loadHotwords());
store.dispatch(loadMallsCover());
store.dispatch(saleProducts());
store.dispatch(loadPopularProducts());
//mada
store.dispatch(loadProducts());

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
