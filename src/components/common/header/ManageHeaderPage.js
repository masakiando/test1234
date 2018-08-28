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
  updateSearchState(event) {
    return this.setState({search: event.target.value});
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


export default ManageHeaderPage;
/*<img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} />*/
