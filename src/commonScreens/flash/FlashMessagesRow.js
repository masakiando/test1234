import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

class FlashMessagesRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      topindex: this.props.topindex,
      rightindex: this.props.right
    };

    this.onClose = this.onClose.bind(this);
  }
  // Mount後遅延でmessage close
  componentDidMount() {
    this.timer = setTimeout(
      this.onClose,
      this.props.timeout
    );
  }
  // setTimeoutの設定解除
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onClose() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <Div style={{
          top: 60 * this.state.topindex + 10 + 'px',
          right: this.state.rightindex
      }}>
        <span>{text}</span>
        <button
          onClick={this.onClose}
          className="close"><span>&times;</span>
        </button>
      </Div>
    );
  }
}

FlashMessagesRow.propTypes = {
  messages: PropTypes.array,
  topindex: PropTypes.number,
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
  timeout: PropTypes.number,
  right: PropTypes.number
};

FlashMessagesRow.defaultProps = {
  timeout: 10000,
  right: '50px'
};

export default FlashMessagesRow;

const Div = styled.div`
z-index:1000000000000000;
position: absolute;
height: 3em;
width: 40%;
border-radius: 0.5em;
background-color: #00bfa5;
opacity: .9;
font-size: 1.5em;
border: 2px solid;
padding: 1em;
display:flex;
align-items:center;
justify-content:space-between;
`;
