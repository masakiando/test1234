import React from 'react';
import Menu from './ManageMenu';
import Body from './ManageBody';

class ManageHeaderPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <header className="hero">
        <Menu/>
        <Body/>
      </header>
    );
  }
}

export default ManageHeaderPage;
