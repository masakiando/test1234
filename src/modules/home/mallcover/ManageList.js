import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import List from './screens/List';

class MallCover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPositon: 0
    };
    this.nextOne = this.nextOne.bind(this);
  }
  nextOne(){
    const malllist_length = this.props.malls.length;//sale品の個数を取得
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

    if( newPositonValue === (malllist_length -2)/2 ) {
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
    const { malls } = this.props;
    const { listPositon } = this.state;
    return (
      <div className="mall-cover">
        <div className="mall-cover_title">
          <h2><span>Thanks for mall-cover!</span></h2>
        </div>
        <button
          className=""
          onClick={this.nextOne}
        >nextOne</button>
        <List
          malls={malls}
          listPositon={this.state.listPositon}
        />
      </div>
    );
  }
}

MallCover.propTypes = {
  malls: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  const { malls } = state;
  return {
   malls: malls
  };
}
export default connect(mapStateToProps, null)(MallCover);
