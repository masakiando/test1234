import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Component(React)とReduxの接続
import List from './screens/List';

class HotwordPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {HelloHotwordPage, hotwords} = this.props;

    return (
      <div className="hot-word mycontainer">
        <div className="">
          <h2><span>{HelloHotwordPage}</span></h2>
        </div>
        <div className="">
         <List
           hotwords={hotwords}
          />
        </div>
      </div>
    );
  }
}

HotwordPage.propTypes = {
  hotwords: PropTypes.array.isRequired,
  HelloHotwordPage: PropTypes.string
};

HotwordPage.defaultProps = {
  HelloHotwordPage: "Thanks for HotwordPage!"
};

function mapStateToProps(state, ownProps) {
  return {
    hotwords: state.hotwords
  };
}

export default connect(
  mapStateToProps,null
)(HotwordPage);
