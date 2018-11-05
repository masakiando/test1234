import 'babel-polyfill';
import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute, Link, IndexLink } from 'react-router';
import App from './components/App';
import Home from './components/home/index';

import CourseManageForm from './modules/course/ManageForm';
import CourseManageList from './modules/course/ManageList';
import LoginManageForm  from './modules/login/ManageForm';
import SignupPage       from './modules/signup/ManageForm';
import CartManageList from './modules/cart/ManageList.js';

import ManageProductPage from './components/productRegistration/ManageProductPage';
import SingleProduct from './components/singleProduct/ManageSingleProductPage';

import A_Page from './components/a_page/A_page';
import imageUpload from './components/imageUpload/ManageimageUploadPage';
import E_Page from './components/e_page/E_page';

import ToolTip from './components/c_page/ToolTip';
import Error404 from './components/errors/Error404Page.js';

import PurchasePage from './components/user/ManagePurchasePage';

import BuyPage from './components/buy/BuyPage';

import requireAuth from './utils/requireAuth';

import DevHome from './components/dev/DevHome';
import Test_Grid from './components/dev/Test_Grid';
import bulma1 from './components/dev/Bulma_1';
import bulma2 from './components/dev/Bulma_2';
import bulma3 from './components/dev/Bulma_3';
import bulma4 from './components/dev/Bulma_4';
import bulma5 from './components/dev/Bulma_5';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="courses" component={CourseManageList} />
      <Route path="course" component={CourseManageForm} />
      <Route path="course/:id" component={CourseManageForm} />
      <Route path="/LoginPage" component={LoginManageForm} />


    <Route path="/singleproduct/:id" component={SingleProduct} />

    <Route path="/a" component={A_Page} />
    <Route path="/ManageProductPage" component={ManageProductPage} />
    <Route path="/c" component={ToolTip} />
    <Route path="/d" component={imageUpload} />
    <Route path="/e" component={E_Page} />

    <Route path="/SignupPage" component={SignupPage} />

    <Route path="/cart" component={CartManageList} />

    <Route path="/user/purchase" component={PurchasePage} />

    <Route path="BuyPage" component={requireAuth(BuyPage)} />

    <Route path="/dev" component={DevHome} />
    <Route path="/Test_Grid" component={Test_Grid} />
    <Route path="/bulma1" component={bulma1} />
    <Route path="/bulma2" component={bulma2} />
    <Route path="/bulma3" component={bulma3} />
    <Route path="/bulma4" component={bulma4} />
    <Route path="/bulma5" component={bulma5} />

    <Route path="/*" component={Error404} />
  </Route>
);
