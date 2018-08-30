import React, {PropTypes} from 'react';

import {Link} from 'react-router';

import BannerPage from './banner/BannerPage';
import HotwordPage from './hotword/HotwordPage';
import CategorPage from './categor/CategorPage';

import FlashSalePage from './flashsale/FlashSalePage';
// import MallCoverPage from './MallCoverPage';
// import PopularPage from './PopularPage';

import DailyPage from './daily/DailyPage';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <main style={Style}>
          <div className="container">
            <BannerPage/>
            <HotwordPage/>
            <CategorPage />
            <FlashSalePage />

            <DailyPage/>
          </div>
        </main>
    );
  }
}

export default MainPage;
//moving card
// <div style={cardStyle} className="move">move</div>
let h = 225;
let w = 225;
let Style = {
  position: 'relative'
};
let cardStyle = {
  position: "absolute",
  height:`${h}px`,
  width: `${w}px`,
  padding: "0 0 2.5em",
  margin: 20,
  border: 10,
  borderRadius: 5,
  backgroundColor: "#FFF",
  WebkitFilter: "drop-shadow(0px 0px 5px #666)",
  filter: "drop-shadow(0px 0px 5px #666)"
};
