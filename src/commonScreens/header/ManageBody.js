import React, {PropTypes}  from 'react';
import { Link, IndexLink } from 'react-router';
import TextInputSearch     from '../recycle/Form/Input/TextInput_&_Search';
import { Wrap, Container, Grid, LogoSection, SearchSection, Form, Ul, CartSection
}                          from './styles/BodyStyled';
var logo =              require('./pictures/site_log.png');
var cocacola =          require('./pictures/cocacola-mobile.png');

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
    </Wrap>
    );
  }
}

export default HeaderBody;
