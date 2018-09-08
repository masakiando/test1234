//HeaderBody Component
import React, {PropTypes} from 'react';

import { Link, IndexLink } from 'react-router';
import styled from 'styled-components';
import media from "styled-media-query";
import { color } from './_setting_color';
import TextInputSearch from '../TextInputSearch';
var logo = require('./HeaderMenu.png');
var cocacola = require('./cocacola-mobile.png');


const HeaderBody = ({
  onChange,
  search
}) => {
    return (
      <HeaderWithSearchWrap className="header__search">
        <Container>
          <Grid>
            <HeaderWithSearchWrapLogoSection>
              <i className="far fa-address-book"></i>
              <Link to="/">
                <picture>
                  <source srcSet={cocacola}  media="(max-width: 450px)"/>
                  <img src={logo} alt="logo"/>
                </picture>
              </Link>
            </HeaderWithSearchWrapLogoSection>

            <HeaderWithSearchWrapSearchSection>
              <Form>
                <TextInputSearch
                  name="search"
                  placeholder="Search Smashing..."
                  value={search}
                  onChange={onChange}/>
                <div className="hot-words">
                  <Ul className="hot-words__list">
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                  </Ul>
               </div>
            </Form>
          </HeaderWithSearchWrapSearchSection>

        <HeaderWithSearchWrapCartSection>
           <a href=""><i className="fas fa-shopping-cart"></i>
          </a>
        </HeaderWithSearchWrapCartSection>

     </Grid>
    </Container>
  </HeaderWithSearchWrap>
  );
};

HeaderBody.propTypes = {
  onChange: PropTypes.func.isRequired,
  search: PropTypes.string
};
//大文字注意
const HeaderWithSearchWrap = styled.div`
width: 1280px;
background-color: ${color.siteBase};
padding: .5em 0em;


${media.lessThan('small')`
  display:none;
`}
`;
//大文字注意
const Container = styled.div`
width: 1200px;
margin: 0px 40px;
`;
//大文字注意
const Grid = styled.div`
  display: grid;
  grid-template-rows: 55px 45px;
  grid-template-columns: 162px 1fr 100px;
  grid-template-areas:
    "areaA areaB areaD"
    "areaA areaB areaD";

  row-gap: 0em;
  column-gap: 1em;
  padding: 0em;
`;
const HeaderWithSearchWrapLogoSection = styled.div`
  grid-area: areaA;

  img {
    max-width :100%;
  	max-height: 100%;
    object-fit: cover;
  }
`;

const HeaderWithSearchWrapSearchSection = styled.div`
  grid-area: areaB;
`;

const Form = styled.form`
  padding: 0px 10px;
`;
const Ul = styled.ul`
margin-top: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const HeaderWithSearchWrapCartSection = styled.div`
grid-area: areaD;
background: #ff5722;
display: flex;
// align-items: center;
justify-content: center;

a {
  padding: 1em 0em;
}
`;

export default HeaderBody;
