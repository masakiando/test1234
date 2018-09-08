import React from 'react';

import HeaderMenu from './HeaderMenu';
import HeaderBody from './HeaderBody';

class ManageHeaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.updateSearchState = this.updateSearchState.bind(this);
  }
  updateSearchState(e) {
    const item = document.getElementsByClassName('fa-shopping-cart');
    console.log(item[0].offsetLeft);
    console.log(item[0].offsetTop);
    const item2 = document.getElementsByClassName('move');
    console.log(item2[0].offsetLeft);
    let color = 'red';
    item2[0].style["background-color"] = color;
    item2[0].style["left"] = "1100px";
    item2[0].style["top"] = "-20px";

    return this.setState({search: e.target.value});
  }

  render() {
    return (
      <header id="top">
          <HeaderMenu/>
          <HeaderBody
            onChange={this.updateSearchState}
            search={this.state.search}
          />

      </header>
    );
  }
}

// <div className="move">hello</div>
export default ManageHeaderPage;
/*<img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} />*/
