import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { browserHistory, Link } from 'react-router';
import * as Actions from './actions/Actions';
import QuantityButton from './screens/QuantityButton';
import AddtoCartButton from './screens/AddtoCartButton';

import styled from 'styled-components';
import {Button, Popover, Position, Tooltip,Card, Elevation} from "@blueprintjs/core";

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
          <Card
            interactive elevation={Elevation.TWO}>
              <figure className="image is-256x256 is-5by4 is-marginless">
              { /* <img style={{backgroundSize: "100% 100%"}} src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"/> */ }
              <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image"/>
              </figure>
              <div className="content">
                <table className="table-profile has-text-dark">
                  <tr>
                    <th colSpan="1"></th>
                    <th colSpan="2"></th>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>Guru's Lab</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>0123-456789</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>minion@despicable.me</td>
                  </tr>
                </table>
              </div>
              <br/>
              <div className="buttons has-addons is-centered">
                <a href="#" className="button is-link">Github</a>
                <Link className="button is-link" to={`/singleproduct/${product.id}`}>
                  LinkedIn
                </Link>
                <a href="#" className="button is-link">CodeTrace</a>
              </div>
          </Card>
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
  let paramsProductId = 1; // from the path get id

  let product = {};
  let im = [{
                id: '',
                product_id: "",
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
