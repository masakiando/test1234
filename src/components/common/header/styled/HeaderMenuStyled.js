import styled from 'styled-components';
import media from "styled-media-query";
export const color = {
  siteNav: '#f74d18',
  siteBase: '#ff5722'
};
// ************ HeaderMenu ************ //
export const Wrap = styled.div`
width: 1280px;
background-color: ${color.siteNav};
padding: .5em 0em;

${media.lessThan('small')`
  display:none;
`}
`;
export const Container = styled.div`
width: 1200px;
margin: 0px 40px;
`;
export const Nav = styled.nav`
  overflow: hidden;
  display: flex;//初期値row
  flex-direction: row; //子要素を横並びさせる
  justify-content: space-between;
`;
export const Ul = styled.ul`
display: flex;//初期値row
flex-direction: row;//子要素を横並びさせる;
margin: 0;
`;
export const Li = styled.li`
margin-right: 1em;//要素右にスペースを作る
text-align: center;
flex-grow: 1;
`;
