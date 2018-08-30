var MallCover = require('./mallcover.200.112.png');
import styled from 'styled-components';
import React, {PropTypes} from 'react';

const Div = styled.div`
border-radius: 3px;
margin: 1em auto;
width: 1200px;
height: 224px;
overflow: hidden;
position: relative;
`;
const Ul = styled.ul`
left: 0;
height: 224px;
will-change: transform;
-webkit-transition: .5s all linear;
position: relative;
//li を２行にする
flex-direction: column;
display: flex;
flex-wrap: wrap;//親要素に収まらないアイテムは次の列に表示させる
`;
const Li = styled.li`
float: left;
height:112px;
width: 200px;
position: 'relative';
background-color: rgba(0,0,0,.7);
`;
const DviImgFrame = styled.div`
padding-top:0em;
`;
const Img = styled.img`
background-size: 100% 100%;
height:112px;
width: 202px;
display:block;
margin:auto;
`;

const MallCoverList = ({
  malls,
  listPositon
}) => {
  const transition = listPositon * -200;//ul要素を移動させる距離をつくる
  return (
    <Div>
      <Ul style={{
          width: ( malls.length * 200/2 ) + 'px',
          transform: 'translateX(' + transition + 'px)'
        }}>
        {malls.map(mall =>
          <Li key={mall.id}>
            <a href="">
              <DviImgFrame>
                <Img src={MallCover} alt=""/>
              </DviImgFrame>
            </a>
          </Li>
        )}
      </Ul>
    </Div>
  );
};

MallCoverList.propTypes = {
  malls: PropTypes.array,
  listPositon: PropTypes.number
};

export default MallCoverList;
