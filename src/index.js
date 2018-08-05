import 'babel-polyfill';
import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="nav nav--center">
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="/a">Aふぉん</Link>
      {" | "}
      <Link to="/b">Bとても</Link>
      {" | "}
      <Link to="/c">C愛してる</Link>
    </nav>
  );
};
const Home = () => {
  return (
    <h2>hello Home</h2>
  );
};
const A_Page = () => {
  return (
    <h2>hello A_Page</h2>
  );
};
const B_Page = () => {
  return (
    <h2>hello B_Page</h2>
  );
};
const C_Page = () => {
  return (
    <h2>hello C_Page</h2>
  );
};


class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
         {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

const routes =  (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="a" component={A_Page} />
    <Route path="b" component={B_Page} />
    <Route path="c" component={C_Page} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('app')
);
