import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import List from './screens/List';

class FlashSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPositon: 0
    };
    this.nextseleOne = this.nextseleOne.bind(this);
  }

  nextseleOne(){
    const salelist_length = this.props.saleproducts.length;//sale品の個数を取得
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

    if( newPositonValue === salelist_length -1 ) {
      this.setState({
          listPositon: 0
      });
    } else {
      this.setState({
          listPositon: newPositonValue
      });
    }
  }


  render() {
    const { saleproducts } = this.props;
    const { listPositon } = this.state;
    return (
      <div className="flash-sale">
        <div className="flash-sale_title">
          <h2><span>Thanks for Flash Sale!</span></h2>
        </div>
        <button
          className=""
          onClick={this.nextseleOne}
        >nextseleOne</button>
        <List
          saleproducts={saleproducts}
          listPositon={this.state.listPositon}
        />
      </div>
    );
  }
}

FlashSale.propTypes = {
  saleproducts: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    saleproducts: state.saleproducts
  };
}

export default connect(
  mapStateToProps, null
) (FlashSale);
