import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PopularList from './PopularList';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPositon: 0
    };
    this.nextPopularOne = this.nextPopularOne.bind(this);
  }
  nextPopularOne(){
    const popularlist_length = this.props.popularproducts.length;//sale品の個数を取得
    const currentPositonValue = this.state.listPositon;
    // 一つのセール品は幅200px
    // Listは１６個で６個のみユーザーには見えています
    // 1回目のクリック+5して-1000pxをX方向に移動させます
    // 結果6番目のアイテムが1番目に移動しているように見せます
    // 結果最後に見えているものは１１番目のアイテムが1番目になります
    // 1回目のクリック+5してさらに-1000pxをX方向に移動させます
    // 結果最後に見えているものは１６番目のアイテムになります
    // ３回目のクリックでは条件式を一致させたいのでnewPositonValueの値１５と
    //一致させてlistPositonを０に戻します
    const newPositonValue = currentPositonValue + 5;
    const resetPositonValue = 0;
    if( newPositonValue === popularlist_length -1 ) {
      this.setState({
          listPositon: resetPositonValue
      });
    } else {
      this.setState({
          listPositon: newPositonValue
      });
    }
  }
  render() {
    const { popularproducts } = this.props;
    return (
      <div className="popular-products">
        <div className="popular-products__title">
          <h2><span>This is popular-products</span></h2>
        </div>
        <button
          className=""
          onClick={this.nextPopularOne}
        >nextPopularOne</button>
        <PopularList
          popularproducts={popularproducts}
          listPositon={this.state.listPositon}
        />
    </div>
    );
  }
}

Popular.propTypes = {
  popularproducts: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    popularproducts: state.popularproducts
  };
}

export default connect(
  mapStateToProps, null
)(Popular);
