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
        <main>
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
let Style = {
  position: 'relative',
  backgroundColor: '#f5f5f5'
};
