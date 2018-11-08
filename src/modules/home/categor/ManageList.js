import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'; // Component(React)とReduxの接続
import List from './screens/List';

class Categor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { HelloCategorPage, categoriesCover } = this.props;
    return (
      <div className="categor mycontainer">
        <div className="categor__title">
          <h2><span>{HelloCategorPage}</span></h2>
        </div>
        <div className="categor__content">
          <List categoriesCover={categoriesCover}/>
        </div>
      </div>
    );
  }
  }

Categor.propTypes = {
  categoriesCover: PropTypes.array,
  HelloCategorPage: PropTypes.string
};

Categor.defaultProps = {
  HelloCategorPage: "Thanks for CategorPage!"
};

function mapStateToProps(state, ownProps) {
  const { categoriesCover } = state;
  return {
   categoriesCover
  };
}
export default connect(mapStateToProps,null)(Categor);
