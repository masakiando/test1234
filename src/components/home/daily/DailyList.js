import React, {PropTypes} from 'react';
// import ProductImg from './product_0.190.190.png';//deve_img
var ProductImg = require('./product_0.190.190.png');
import styled from 'styled-components';

const Div = styled.div`
border-radius: 3px;
margin: 1em auto;
width: 1200px;
overflow: hidden;
border-radius: 3px;
position: relative;
// background-color:blue;
`;
const Ul = styled.ul`
left: 0;
width: 1200;
background-color: red;
`;
const Li = styled.li`
float: left;
height:313px;
width: 190px;
margin: 0px 5px;
position: 'relative';
// background-color: rgba(0,0,0,.7);
`;
const Figure = styled.figure`
margin:auto;
`;
const DviImgFrame = styled.div`
padding-top:0.1em;
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
word-wrap: break-word;
line-height: 1.8rem;
height: 3.5rem;
margin: 0;
padding: 0;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
`;
const Figcaption = styled.figcaption`
padding: 0px;
`;
const DviPriceFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0.1em 0.1em;
`;
const a = {
textDecoration: 'line-through'
};

const PopularList  = ({
  products,
  listPositon
}) => {
  return (
    <Div>
      <Ul>
      {products.slice(0,60).map(product =>
        <Li key={product.id}>
          <a href="">
          <Figure>
            <DviImgFrame>
              <Img src={ProductImg} alt=""/>
            </DviImgFrame>
            <Figcaption>
              <div>
                <P>{product.id}.{product.product_discrption}</P>
              </div>
              <DviPriceFlex>
                <div>
                  <span>
                    i
                    {product.sale_status === true ? <span style={a}>{product.price}</span> : product.price}
                  </span>
                  {product.sale_status === true &&
                  <span>
                    i
                    {product.discount_price}
                  </span>
                  }
                </div>
                <div>
                  {product.shipping_free === true && <span>i</span>}
                </div>
              </DviPriceFlex>
              <DviPriceFlex>

                <DviPriceFlex>
                  <span>i</span>
                  <div>({product.heart})</div>
                </DviPriceFlex>

                <DviPriceFlex>
                  <div><span>i</span></div>
                  <div>({product.star})</div>
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
  products: PropTypes.array,
  listPositon: PropTypes.number
};

export default PopularList;
