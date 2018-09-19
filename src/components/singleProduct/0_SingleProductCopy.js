// import React, {PropTypes} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// // import GameForm from './GameForm';
// // import { Redirect } from 'react-router-dom';
// // import * as gameActions from '../../actions/gameActions';
// // import toastr from 'toastr';
// import styled from 'styled-components';
// const Div = styled.div`
// width: 400px;
// `;
//
// import ImageGallery from 'react-image-gallery';
// let imgStyle = {
//   width: 180
// };
//
// class SingleProduct extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//
//     this.state = {
//       product: Object.assign({}, this.props.product)
//     };
//     this.onImageClick = this.onImageClick.bind(this);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if (this.props.product.id != nextProps.product.id) {
//       this.setState({
//         product: Object.assign({}, nextProps.product)
//       });
//     }
//   }
//   onImageClick(event) {
//     console.log('clicked on image', event.target, 'at index');
//     console.log(event.target.title);
//   }
//
//   render() {
//         const images = [
//       {
//         original: 'https://cf.shopee.vn/file/1fb450b3672e93050f1b46542a00149e',
//         thumbnail: 'https://cf.shopee.vn/file/1fb450b3672e93050f1b46542a00149e',
//         originalTitle:'img1',
//         width: 180
//       },
//       {
//         original: 'https://cf.shopee.vn/file/0d750afe1e5b4b2bf74b691c1d37d843',
//         thumbnail: 'https://cf.shopee.vn/file/0d750afe1e5b4b2bf74b691c1d37d843',
//         originalTitle:'img2',
//         width: 180
//       },
//       {
//         original: 'https://cf.shopee.vn/file/1fb450b3672e93050f1b46542a00149e',
//         thumbnail: 'https://cf.shopee.vn/file/1fb450b3672e93050f1b46542a00149e',
//         originalTitle:'img3',
//         width: 180
//       }
//     ];
//     return (
//         <div>
//           <div>{this.state.product.id}</div>
//           <div>{this.state.product.product_name}</div>
//           <Div><ImageGallery items={images} onClick={this.onImageClick} showBullets/></Div>
//           <div>hello</div>
//         </div>
//     );
//   }
// }
//
// SingleProduct.propTypes = {
//   product: PropTypes.object.isRequired
// };
//
// // SingleProduct.contextTypes = {
// //   router: PropTypes.object
// // };
//
// function getProductsById(products, id) {
//   const product = products.filter(product => product.id == id);
//   if (product) return product[0];
//   return null;
// }
//
// function mapStateToProps(state, ownProps) {
//   const { products } = state;
//   const paramsProductId = ownProps.params.id; // from the path get id
//
//   let product = {};
//   debugger;
//   if (paramsProductId && products.length > 0) {
//     product = getProductsById(products, paramsProductId);
//   }
//   return {
//     product: product
//   };
// }
//
// // function mapDispatchToProps(dispatch) {
// //   return {
// //     actions: bindActionCreators(gameActions, dispatch)
// //   };
// // }
//
// export default connect(
//   mapStateToProps,
//   null//mapDispatchToProps
// )(SingleProduct);
