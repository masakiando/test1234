import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import TextInputSearch from '../TextInput_&_Search';
import {
         Wrap,Container,
           Grid,
             LogoSection,SearchSection,Form,Ul,CartSection
} from './styled/HeaderBodyStyled';
var logo = require('./images/site_log.png');
var cocacola = require('./images/cocacola-mobile.png');
import LoadingDots from '../LoadingDots';
import {connect} from 'react-redux';


class HeaderBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.updateSearchState = this.updateSearchState.bind(this);
  }
  updateSearchState(e) {
    return this.setState({search: e.target.value});
  }

  render() {
    return (
    <Wrap className="header__search">
      <Container>
        <Grid>
          <LogoSection>
            <i className="far fa-address-book"></i>
            <Link to="/">
              <picture>
                <source srcSet={cocacola}  media="(max-width: 450px)"/>
                <img src={logo} alt="logo"/>
              </picture>
            </Link>
          </LogoSection>
          <SearchSection>
            <Form>
              <TextInputSearch
                name="search"
                placeholder="Search Smashing..."
                value={this.state.search}
                onChange={this.updateSearchState}/>
              <div className="hot-words">
                <Ul className="hot-words__list">
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </Ul>
              </div>
           </Form>
         </SearchSection>
         <CartSection base>
           <Link to="/ManageCartPage"><i className="fas fa-2x fa-shopping-cart"></i></Link>
         </CartSection>
        </Grid>
      </Container>
      {this.props.loading &&<LoadingDots interval={100} dots={20}/>}
      {!this.props.loading &&<span>&nbsp;</span>}
    </Wrap>
    );
  }
}

HeaderBody.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses,
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps, null)(HeaderBody);
