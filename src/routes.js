import 'babel-polyfill';
import React, {PropTypes} from 'react';
import { render }         from 'react-dom';
import { Route, IndexRoute, Link, IndexLink }
                          from 'react-router';

import App                from './App';
import Home               from './modules/home/index';
import LoginManageForm   from './modules/login/ManageForm';
import SignupManageForm  from './modules/signup/ManageForm';
import CartManageList    from './modules/cart/ManageList.js';
import BuyManageForm     from './modules/buy/ManageForm';
import ProductRegistrationManageForm from './modules/productRegistration/ManageForm';
import SingleProductManageForm from './modules/singleProduct/ManageForm';

import OrderLog from './modules/userMyPage/OrderLog';
import Error404 from './commonScreens/errors/Error404Page.js';
import requireAuth from './utils/requireAuth';

// devDemoComponents
import DevHome           from './devDemoComponents/DevHome';
import CourseManageForm  from './devDemoComponents/course/ManageForm';
import CourseManageList  from './devDemoComponents/course/ManageList';
import TestGrid          from './devDemoComponents/TestGrid';
import Bulma1            from './devDemoComponents/Bulma1';
import Bulma2            from './devDemoComponents/Bulma2';
import Bulma3            from './devDemoComponents/Bulma3';
import Bulma4            from './devDemoComponents/Bulma4';
import Bounce            from './devDemoComponents/Bounce';
import ToolTip           from './devDemoComponents/ToolTip';
import ImgUpReader       from './devDemoComponents/ImageUploadSaveLocal';
import GoogleSignin      from './devDemoComponents/GoogleSignin';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="courses" component={CourseManageList} />
      <Route path="course" component={CourseManageForm} />
      <Route path="course/:id" component={CourseManageForm} />
      <Route path="/SignupPage" component={SignupManageForm} />
      <Route path="/LoginPage" component={LoginManageForm} />
      <Route path="/singleproduct/:id" component={SingleProductManageForm} />

      <Route path="/ManageProductPage" component={ProductRegistrationManageForm} />

      <Route path="/cart" component={CartManageList} />
      <Route path="/buy" component={requireAuth(BuyManageForm)} />

      <Route path="/user/purchase" component={OrderLog}/>

      <Route path="/dev" component={DevHome} />
      <Route path="/TestGrid" component={TestGrid} />
      <Route path="/bulma1" component={Bulma1} />
      <Route path="/bulma2" component={Bulma2} />
      <Route path="/bulma3" component={Bulma3} />
      <Route path="/bulma4" component={Bulma4} />
      <Route path="/bounce" component={Bounce} />
      <Route path="/tooltip" component={ToolTip} />
      <Route path="/imageUploadSaveLocal" component={ImgUpReader} />
      <Route path="/devgooglesignin" component={GoogleSignin} />

      <Route path="/*" component={Error404} />
  </Route>
);
