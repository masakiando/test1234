import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const PopularList  = ({
  products,
  imageUrl,
  onError,
  itemNumber
}) => {
  return (
    <Div>
      <Ul>
      {products.slice(0,itemNumber).map(product =>
        <Li key={product.id}>
          <Link to={`/singleproduct/${product.id}`}>
          <Figure>
            <DviImgFrame>
              <Img onError={onError}src={imageUrl} alt=""/>
            </DviImgFrame>
            <Figcaption>
              <div>
                <P>{product.id}.{product.product_discrption}</P>
              </div>
              <DviPriceFlex>
                <div>
                  <span>
                    i{product.sale_status === true ? <span style={a}>{product.price}</span> : product.price}
                  </span>
                     {product.sale_status === true && <span>i{product.discount_price}</span>}
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
          </Link>
        </Li>
      )}
      </Ul>
    </Div>
  );
};

PopularList.propTypes = {
  products: PropTypes.array,
  imageUrl: PropTypes.string,
  onError: PropTypes.func,
  itemNumber: PropTypes.number.isRequired
};
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
width: 200px;
margin: 0px;
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
width: 180px;
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
export default PopularList;
