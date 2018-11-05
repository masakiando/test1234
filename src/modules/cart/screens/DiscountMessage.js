import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const DiscountMessage = () => {
  return (
    <Div>
      <i className="fas fa-truck"></i>
      <P>無料の配送コードはありますか？<strong>配送特典</strong>を受け取ることを選択してください！<Link to="/">ディスカウントコード></Link></P>
    </Div>
  );
};

export default DiscountMessage;

const Div = styled.div`
background-color: #fffefb;
border: 1px solid rgba(224,168,0,.4);
padding: 1.2rem 1.6rem;
display: flex;
align-items: center;
margin-bottom: 1rem;
border-radius: 2px;
`;
const P = styled.p`
margin-left: 1rem
margin-bottom: 0rem;
font-family: "游ゴシック", Helvetica , sans-serif;
`;
