import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProductActions from '../../actions/ProductActions';
import styled from 'styled-components';

class SingleProduct extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      product: Object.assign({}, this.props.product),
      img0: true,img1: false,img2: false,img3: false,img4: false,
      img5: false,img6: false,img7: false,img8: false,img9: false,
      active: 0
    };
    this.imgChange = this.imgChange.bind(this);
  }

componentDidMount() {
  console.log("Page location is " + window.location.href);
  var foo = window.location.href;
  var tmp = foo.replace(/[^0-9]/g, "");
  var test = tmp + '';
  var id = test.substr(4,10);
  // console.log(test.substr(4,10));
  // this.props.actions.loadSingleProductImege(this.props.id);
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
/* 初回は0番目要素classNameにactiveを追加*/
  isActive(value){
      if(this.state.active === value){
          return 'active';
      }
      return null;
  }
/* このイベントでクリックされたvalueを取得してactiveを切り替える */
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
          className={this.isActive(i) + ' singleproduct_img_dot'}
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

  render() {
    return (
        <div>
            <div className="singleproduct">
              <div className="singleproduct_img">
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
                <ul className="singleproduct_img_dots">
                  {this.renderDots()}
                </ul>
              </div>
            </div>
        </div>
    );
  }
}

SingleProduct.propTypes = {
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
    actions: bindActionCreators(ProductActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);

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
