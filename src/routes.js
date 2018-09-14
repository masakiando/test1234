import 'babel-polyfill';
import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute, Link, IndexLink } from 'react-router';
import App from './components/App';
import Home from './components/home/index';
import SingleProduct from './components/singleProduct/SingleProduct';

import A_Page from './components/a_page/A_page';
import B_Page from './components/b_page/B_page';
import C_Page from './components/c_page/C_page';
import Error404 from './components/errors/Error404Page.js';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/singleproduct/:id" component={SingleProduct} />

    <Route path="/a" component={A_Page} />
    <Route path="/b" component={B_Page} />
    <Route path="/c" component={C_Page} />

    <Route path="/SignupPage" component={SignupPage} />
    <Route path="/LoginPage" component={LoginPage} />
    <Route path="/*" component={Error404} />
  </Route>
);
