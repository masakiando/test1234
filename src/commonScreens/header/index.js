import React from 'react';
import Menu from './ManageMenu';
import Body from './ManageBody';

class ManageHeaderPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id="top">
        <Menu/>
        <Body/>
      </header>
    );
  }
}

export default ManageHeaderPage;
