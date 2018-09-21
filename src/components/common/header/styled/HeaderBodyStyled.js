import styled from 'styled-components';
import media from "styled-media-query";
export const color = {
  siteNav: '#f74d18',
  siteBase: '#ff5722'
}
// ************ HeaderBody ************ //
export const Wrap = styled.div`
background-color: ${color.siteBase};


width: 1280px;
padding: .5em 0em;

${media.lessThan('small')`
  display:none;
`}
`;
export const Container = styled.div`
width: 1200px;
margin: 0px 40px;
`;
export const Grid = styled.div`
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
export const LogoSection = styled.section`
  grid-area: areaA;

  img {
    max-width :100%;
  	max-height: 100%;
    object-fit: cover;
  }
`;
export const SearchSection = styled.section`
  grid-area: areaB;
`;
export const Form = styled.form`
  padding: 0px 10px;
`;
export const Ul = styled.ul`
margin-top: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
export const CartSection = styled.section`
grid-area: areaD;
display: flex;
align-items: center;
justify-content: center;

a {
  padding: 1em 0em;
}
`;
