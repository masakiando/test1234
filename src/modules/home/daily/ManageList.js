import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import List from './screens/List';
var onError = require('./pictures/onError.png');

class DailyDiscover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "https://cf.shopee.ph/file/bd0b9d0a59d8e712bd87ac836504df80_tn"
    };
    this.onError = this.onError.bind(this);
  }
  onError() {
    this.setState({
      imageUrl: onError
    });
  }
  render() {
    const { products } = this.props;
    return (
      <div className="daily-discover">
        <div className="daily-discover__title">
          <h2><span>Thanks for DailyDiscover!</span></h2>
        </div>
        <List
          products={products}
          imageUrl={this.state.imageUrl}
          onError={this.onError}
        />
      </div>
    );
  }
}

DailyDiscover.propTypes = {
  products: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
   products: state.products
  };
}

export default connect(
  mapStateToProps, null
)(DailyDiscover);
