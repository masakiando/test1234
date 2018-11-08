import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FlashMessagesRow from './FlashMessagesRow';
import { deleteFlashMessage } from '../../actions/flashMessagesActions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class FlashMessagesList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const message = this.props.messages.map((element, index, array) =>
      <FlashMessagesRow
        key={element.id}
        message={element}
        topindex={index}
        messages={array}
        deleteFlashMessage={this.props.deleteFlashMessage}
      />
    );

    return (
      <ReactCSSTransitionGroup
        transitionName = "example"
        transitionEnterTimeout = {500}
        transitionLeaveTimeout = {500}>
      {message}
      </ReactCSSTransitionGroup>
    );
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
