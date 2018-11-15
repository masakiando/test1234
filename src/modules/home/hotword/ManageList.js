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
      <section className="home-container">
        <h2 className="subtitle is-3 has-text-weight-bold">
          {HelloHotwordPage}
        </h2>
        <List hotwords={hotwords}/>
      </section>
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
