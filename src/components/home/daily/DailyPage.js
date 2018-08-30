import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DailyList from './DailyList';
var shopeeimg = require('./shope.png');

class DailyDiscover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPositon: 0,
      imageUrl: "https://cf.shopee.ph/file/bd0b9d0a59d8e712bd87ac836504df80_tn"
    };
    this.onError = this.onError.bind(this);
  }
  onError() {
    this.setState({
      imageUrl: shopeeimg
    });
  }
  render() {
    const { products } = this.props;
    return (
      <div className="daily-discover">
        <div className="daily-discover__title">
          <h2><span>Thanks for DailyDiscover!</span></h2>
        </div>
        <DailyList
          products={products}
          listPositon={this.state.listPositon}
          imageUrl={this.state.imageUrl}
          onError={this.onError}
        />
      </div>
    );
  }
}

DailyDiscover.propTypes = {
  products: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  const { products } = state;
  return {
   products
  };
}

export default connect(
  mapStateToProps, null
)(DailyDiscover);
