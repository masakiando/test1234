import React from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderBody from './HeaderBody';

class ManageHeaderPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id="top">
        <HeaderMenu/>
        <HeaderBody/>
      </header>
    );
  }
}

export default ManageHeaderPage;
