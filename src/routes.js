import 'babel-polyfill';
import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute, Link, IndexLink } from 'react-router';
import App from './components/App';
import Home from './components/home/index';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ManageProductPage from './components/productRegistration/ManageProductPage';
import SingleProduct from './components/singleProduct/ManageSingleProductPage';

import A_Page from './components/a_page/A_page';
import imageUpload from './components/imageUpload/ManageimageUploadPage';
import E_Page from './components/e_page/E_page';

import ToolTip from './components/c_page/ToolTip';
import Error404 from './components/errors/Error404Page.js';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

import BuyPage from './components/buy/BuyPage';

import ManageCartPage from './components/cart/ManageCartPage.js';

import requireAuth from './utils/requireAuth';

import DevHome from './components/dev/DevHome';
import Test_Grid from './components/dev/Test_Grid';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="courses" component={CoursesPage} />
      <Route path="course" component={ManageCoursePage} />
      <Route path="course/:id" component={ManageCoursePage} />


    <Route path="/singleproduct/:id" component={SingleProduct} />

    <Route path="/a" component={A_Page} />
    <Route path="/ManageProductPage" component={ManageProductPage} />
    <Route path="/c" component={ToolTip} />
    <Route path="/d" component={imageUpload} />
    <Route path="/e" component={E_Page} />

    <Route path="/SignupPage" component={SignupPage} />
    <Route path="/LoginPage" component={LoginPage} />

    <Route path="/ManageCartPage" component={ManageCartPage} />

    <Route path="BuyPage" component={requireAuth(BuyPage)} />

    <Route path="/dev" component={DevHome} />
    <Route path="/Test_Grid" component={Test_Grid} />

    <Route path="/*" component={Error404} />
  </Route>
);
