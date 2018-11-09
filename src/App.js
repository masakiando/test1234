import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';
import Header             from './commonScreens/header/index';
import FlashMessagesList  from './commonScreens/flash/FlashMessagesList';
import LoadingDots        from './commonScreens/LoadingDots';

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <FlashMessagesList />
          <Header/>
            {this.props.loading &&<LoadingDots interval={100} dots={20}/>}
            {!this.props.loading &&<span>&nbsp;</span>}
            {this.props.children}
        </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps, null)(App);
