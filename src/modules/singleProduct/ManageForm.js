import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';
import * as Actions from './actions/Actions';
import styled from 'styled-components';
import QuantityButton from './screens/QuantityButton';
import AddtoCartButton from './screens/AddtoCartButton';

class ManageSingleProduct extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      product: Object.assign({}, this.props.product),
      img0: true,img1: false,img2: false,img3: false,img4: false,
      img5: false,img6: false,img7: false,img8: false,img9: false,
      active: 0,
      quantity: 1
    };
    this.imgChange = this.imgChange.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.redirectToXXXXXPage = this.redirectToXXXXXPage.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadSingleProductImege(this.props.Id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product.id != nextProps.product.id) {
      // this.props.actions.loadSingleProductImege(nextProps.product.id);
      this.setState({
        product: Object.assign({}, nextProps.product)
      });
    }
  }

  addItemToCart(event) {
    event.preventDefault();
    console.log('addItemToCart');
    console.log(this.state.product.shop_id);
    this.props.actions.addItemToCart(this.state.product);
    this.props.actions.addItemShopId(this.state.product.shop_id);
    // let cart = [];
    // let item_id = this.props.item.id;
    // console.log(item_id);
    // let item_product_name = this.props.item.product_name;
    // console.log(item_product_name);
    // if (typeof window !== "undefined") {
    //   if (localStorage.getItem('cart')) {
    //     cart = JSON.parse(localStorage.getItem('cart'))
    //   }
    //   cart.push({
    //     product: 'test',
    //     quantity: 1
    //   })
    //   localStorage.setItem('cart', JSON.stringify(cart))
    //
    // }
  }

  isActive(value){
      if(this.state.active === value){
          return 'active';
      }
      return null;
  }

  imgChange(event) {

    const nextValue = event.target.value;

    if(nextValue === 0) this.setState({
      active: nextValue,
      img0: true, img1:false, img2:false, img3:false,img4: false,
      img5: false, img6:false, img7:false,img8: false, img9:false
    });
    if(nextValue === 1) this.setState({
      active: nextValue,
      img0: false, img1:true, img2:false, img3:false,img4: false,
      img5: false, img6:false, img7:false,img8: false, img9:false
    });
    if(nextValue === 2) this.setState({
      active: nextValue,
      img0: false, img1:false, img2:true, img3:false,img4: false,
      img5: false, img6:false, img7:false,img8: false, img9:false
    });
    if(nextValue === 3) this.setState({
      active: nextValue,
      img0: false, img1:false, img2:false, img3:true,img4: false,
      img5: false, img6:false, img7:false,img8: false, img9:false
    });
    if(nextValue === 4) this.setState({
      active: nextValue,
      img0: false, img1:false, img2:false, img3:false,img4: true,
      img5: false, img6:false, img7:false,img8: false, img9:false
    });
    if(nextValue === 5) this.setState({
      active: nextValue,
      img0: false, img1:false, img2:false, img3:false,img4: false,
      img5: true, img6:false, img7:false,img8: false, img9:false
    });
    if(nextValue === 6) this.setState({
      active: nextValue,
      img0: false, img1:false, img2:false, img3:false,img4: false,
      img5: false, img6:true, img7:false,img8: false, img9:false
    });
    if(nextValue === 7) this.setState({
      active: nextValue,
      img0: false, img1:false, img2:false, img3:false,img4: false,
      img5: false, img6:false, img7:true,img8: false, img9:false
    });
    if(nextValue === 8) this.setState({
      active: nextValue,
      img0: false, img1:false, img2:false, img3:false,img4: false,
      img5: false, img6:false, img7:false,img8: true, img9:false
    });
    if(nextValue === 9) this.setState({
      active: nextValue,
      img0: false, img1:false, img2:false, img3:false,img4: false,
      img5: false, img6:false, img7:false,img8: false, img9:true
    });
  }

  renderDots() {
    const renderdots = [];
    console.log(this.props.im[0]);
    var length = Object.keys(this.props.im[0]).length;
    console.log(length);
    for (let i = 0; i < length-2; i++) {
      renderdots.push(
        <li
          className={this.isActive(i) + ' dot'}
          key={i}
          ref="dots"
          value={i}
          onClick={this.imgChange}
          >
        </li>
      );
    }
    return renderdots;
  }

  redirectToXXXXXPage() {
    browserHistory.push('/cart');
  }

  render() {
    const { product } = this.props;
     return (
        <div>
          <Container>
            <div className="padding-bottom_1em padding-top_1em">
              <a href="/">A</a>
              <a href="/">B</a>
              <a href="/">C</a>
              <a href="/">D</a>
              <a href="/">E</a>
            </div>
              <Grid>
                <GridA>
                  <DivImagesDotsWrap>
                    <DviProductTopImgWrap>
                      {this.state.img0 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover0}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover0}`} alt=""/>
                        </picture>
                      }
                      {this.state.img1 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover1}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover1}`} alt=""/>
                        </picture>
                      }
                      {this.state.img2 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover2}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover2}`} alt=""/>
                        </picture>
                      }
                      {this.state.img3 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover3}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover3}`} alt=""/>
                        </picture>
                      }
                      {this.state.img4 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover4}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover4}`} alt=""/>
                        </picture>
                      }
                      {this.state.img5 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover5}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover5}`} alt=""/>
                        </picture>
                      }
                      {this.state.img6 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover6}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover6}`} alt=""/>
                        </picture>
                      }
                      {this.state.img7 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover7}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover7}`} alt=""/>
                        </picture>
                      }
                      {this.state.img8 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover8}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover8}`} alt=""/>
                        </picture>
                      }
                      {this.state.img9 &&
                        <picture>
                          <source srcSet={`${this.props.im[0].cover9}`}  media="(max-width: 450px)"/>
                          <Img src={`${this.props.im[0].cover9}`} alt=""/>
                        </picture>
                      }
                    </DviProductTopImgWrap>
                    <ul className="dots">
                      {this.renderDots()}
                    </ul>
                  </DivImagesDotsWrap>
                  <div className="_3GXLnx card v-cente">
                    <h3>hello</h3>
                  </div>
                  <div className="_3GXLnx card v-cente">
                    <h3>hello</h3>
                  </div>
                </GridA>

                <GridB className="product-info">

                  <DivProductInfoHeader>
                    <H1>{product.product_name}</H1>
                    <div>
                      {product.sale_status === true ? <SpanPproductPrice style={a}>₱{product.price}</SpanPproductPrice> : <SpanPproductPrice>₱{product.price}</SpanPproductPrice>}
                      {product.sale_status === true && <SpanPproductRealPrice>₱{product.discount_price}</SpanPproductRealPrice>}
                    </div>
                    <div>
                      <SpanPproductStarScore>⭐️⭐️⭐️⭐️{product.starScore}  / 5</SpanPproductStarScore>
                    </div>
                  </DivProductInfoHeader>

                  <DivProductInfoBody>

                    <DivProductInfoBodyOrderBlock>
                      <div className="clearfix padding-bottom_1em">
                        <div className="itemA">Colour:</div>
                        <div className="itemB grid5">
                            <button className="btn-OrangeRed">AAAAA</button>
                            <button className="btn-OrangeRed">BBBBB</button>
                            <button className="btn-OrangeRed">CCCCC</button>
                            <button className="btn-OrangeRed">DDDDD</button>
                            <button className="btn-OrangeRed">EEEEE</button>
                            <button className="btn-OrangeRed">AAAAA</button>
                            <button className="btn-OrangeRed">AAAAA</button>
                            <button className="btn-OrangeRed">AAAAA</button>
                            <button className="btn-OrangeRed">AAAAA</button>
                            <button className="btn-OrangeRed">AAAAA</button>
                        </div>
                      </div>
                      <div className="clearfix padding-bottom_1em">
                        <div className="itemA">Size:</div>
                        <div className="itemB grid5">
                            <button className="btn-OrangeRed">S</button>
                            <button className="btn-OrangeRed">M</button>
                            <button className="btn-OrangeRed">L</button>
                            <button className="btn-OrangeRed">XL</button>
                            <button className="btn-OrangeRed">XXL</button>
                        </div>
                      </div>
                      <div className="clearfix">
                        <div className="itemA">Quantity:</div>
                        <div className="itemB itemB-grid">
                          <QuantityButton product={this.state.product} quantity={this.state.quantity}/>
                          <span className="order-quantity__stock-count">
                            {product.produc_quantity}piece available
                          </span>
                        </div>
                      </div>
                    </DivProductInfoBodyOrderBlock>
                  </DivProductInfoBody>

                  <div className="purchasing-related">
                    <div className="grid3">
                        <button className="btn-chat">
                          <span>chat now</span>
                        </button>

                        <AddtoCartButton onAdd={this.addItemToCart} />

                        <button className="btn-buy" onClick={this.redirectToXXXXXPage}>
                          <span>buy now</span>
                        </button>
                    </div>
                  </div>

                  <a className="_3GXLnx sp-card v-center"href="">
                    <span className="_2p1gKo">shopee guarantee</span>
                    <span>Get the items you ordered or get your money back.</span>
                  </a>

                </GridB>
              </Grid>
          </Container>
        </div>
    );
  }
}

ManageSingleProduct.propTypes = {
  product: PropTypes.object.isRequired,
  im: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  Id: PropTypes.string.isRequired
};

// SingleProduct.contextTypes = {
//   router: PropTypes.object
// };

function getProductsById(products, id) {
  const product = products.filter(product => product.id == id);
  if (product) return product[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const { products, img } = state;
  let paramsProductId = ownProps.params.id; // from the path get id

  let product = {};
  let im = [{
                id: '0',
                product_id: "1",
                cover1: '',
                cover2: '',
                cover3: '',
                cover4: '',
                cover5: '',
                cover6: '',
                cover7: '',
                cover8: '',
                cover9: '',
                cover10: ''
              }];

  if (paramsProductId && products.length > 0) {
    product = getProductsById(products, paramsProductId);
  }
  if(img[0]){
    im = img;
  }
  return {
    im: im,
    product: product,
    Id: paramsProductId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Actions, dispatch )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSingleProduct);

const a = {
textDecoration: 'line-through'
};

const DviCenter = styled.div`
 text-align: center;
 display: flex;
`;
const Container = styled.div`
width: 1200px;
margin-right: auto;
margin-left: auto;
padding: 1em 0em 0em 0em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 333px 1fr;
  row-gap: 0em;
  column-gap: 1em;
  padding: 1em 0em;
  overflow: hidden;
  border-radius: 3px;
`;

const GridA = styled.div`
  background-coler: #fff;
`;
const GridB = styled.div`
  background-color: #fbfbfb;
`;

const DivProductInfoHeader = styled.div`
  padding: 1em 0em;
  border-bottom: 1px solid rgba(0,0,0,.09);
`;

const DivProductInfoBody = styled.div`
  padding: 0em 0em;
  border-bottom: 1px solid rgba(0,0,0,.09);
`;

const DivProductInfoBodyRow = styled.div`
  padding: 1em 0em;
  border-bottom: 1px solid rgba(0,0,0,.09);
`;

const DivProductInfoBodyOrderBlock = styled.div`
  padding: 1em 0em;
`;

const H1 = styled.h1`
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  display: inline-block;
`;

const SpanPproductPrice = styled.span`
  display: inline-block;
  margin-right: 1.2rem;
  font-size: 1.7rem;
  color: rgba(0,0,0,.54);
  text-transform: capitalize;
`;
const SpanPproductRealPrice = styled.span`
font-size: 2.4rem;
font-weight: 700;
color: #ff5722;
text-transform: capitalize;
`;

const SpanPproductStarScore = styled.span`
color: #ff5722;
font-size: 1.4rem;
`;

const DivImagesDotsWrap = styled.div`
  position: relative;
  padding: 0em;
  margin: 0em;
`;

const DviProductTopImgWrap = styled.div`
left: 0;
will-change: transform;
-webkit-transition: .5s all linear;
position: relative;
`;

const Img = styled.img`
background-size: 100% 100%;
width: 333px;
height: 333px;
display:block;
margin:auto;
`;

const DviProductTopImg = styled.div`
background-repeat: no-repeat;
background-size:contain;
background-size: 100% 100%;
border-radius: 3px;
`;
