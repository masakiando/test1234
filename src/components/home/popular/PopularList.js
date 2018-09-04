import React, {PropTypes} from 'react';
var PopularImg = require('./product_0.190.190.png');
import styled from 'styled-components';

const PopularList  = ({
  popularproducts,
  listPositon
}) => {
  const transition = listPositon * -200;
  return (
    <Div>
    <Ul style={{
        width: ( popularproducts.length * 200 ) + 'px',
        transform: 'translateX(' + transition + 'px)'
      }}>
      {popularproducts.map(popularproduct =>
        <Li key={popularproduct.id} >
          <a href="">
            <Figure>
              <DviImgFrame>
                <Img src={PopularImg} alt=""/>
              </DviImgFrame>
              <Figcaption>
                <div>
                  <P>{popularproduct.product_discrption}</P>
                </div>
                <DviPriceFlex>
                  <div>
                    <span>₱{popularproduct.price}</span>
                    <span>₱{popularproduct.discount_price}</span>
                  </div>
                  <div>
                    <span>₱</span>
                  </div>
                </DviPriceFlex>
                <DviPriceFlex>

                  <DviPriceFlex>
                    <span>💛</span>
                    <div>({popularproduct.heart})</div>
                  </DviPriceFlex>

                  <DviPriceFlex>
                    <div>⭐️</div>
                    <div>({popularproduct.star})</div>
                  </DviPriceFlex>

                </DviPriceFlex>
              </Figcaption>
            </Figure>
          </a>
        </Li>
      )}
    </Ul>
    </Div>
  );
};

PopularList.propTypes = {
  popularproducts: PropTypes.array,
  listPositon: PropTypes.number
};
const Div = styled.div`
border-radius: 3px;
margin: 1em auto;
width: 1200px;
height: 313px;
overflow: hidden;
border-radius: 3px;
position: relative;
background-color:blue;
`;
const Ul = styled.ul`
left: 0;
width: 4000px;
will-change: transform;
-webkit-transition: .5s all linear;
position: relative;
`;
const Li = styled.li`
float: left;
height:313px;
width: 190px;
margin: 0px 5px;
position: 'relative';
background-color: rgba(0,0,0,.7);
`;
const Figure = styled.figure`
margin:auto;
`;
const DviImgFrame = styled.div`
padding: 0.5em 0em;
`;
const Img = styled.img`
background-size: 100% 100%;
height:190px;
width: 190px;
display:block;
margin:auto;
`;
const P = styled.p`
overflow: hidden;
padding: 0em;
margin:0em;
word-wrap: break-word;
line-height: 1.8rem;
// height: 3.5rem;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
`;
const Figcaption = styled.figcaption`
padding: 0em 0.2em;
`;
const DviPriceFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0.5em;
`;
export default PopularList;
