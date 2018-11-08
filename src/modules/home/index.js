import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import BannerPage    from './banner/ManageList';
import HotwordPage   from './hotword/ManageList';
import CategorPage   from './categor/ManageList';
import FlashSalePage from './flashsale/ManageList';
import MallCoverPage from './mallcover/ManageList';
import PopularPage   from './popular/ManageList';
import DailyPage     from './daily/ManageList';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <main style={Style}>
            <BannerPage/>
            <HotwordPage/>
            <CategorPage />
            <FlashSalePage />
            <MallCoverPage />
            <PopularPage />
            <DailyPage/>
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
  position: 'relative',
  backgroundColor: '#f5f5f5'
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