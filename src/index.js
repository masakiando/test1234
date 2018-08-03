import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <div>Hello React 123</div>
    );
  }
}

render(
    <App/>,
  document.getElementById('app')
);
