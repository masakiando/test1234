import React, {PropTypes} from 'react';
import Header from './common/header/ManageHeaderPage';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <FlashMessagesList/ >
          <Header/>
            {this.props.children}
        </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
