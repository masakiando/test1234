import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/ProductActions';

class ImageUploadCloudinary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uploading: false
    };
    this.onChange = this.onChange.bind(this);
    // this.removeImage = this.removeImage.bind(this);
  }

  onChange(e) {
    event.preventDefault();
    const files = Array.from(e.target.files);
    const formData = new FormData();
    this.setState({ uploading: true });

    files.forEach((file, i) => {
      formData.append(i, file);
    });
    this.props.actions.saveProductImeges(formData)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  // removeImage(id){
  //   this.setState({
  //     images: this.props.images.filter(image => image.public_id !== id)
  //   });
  // }
  // <div key={i}>
  //   <div
  //     onClick={this.removeImage(image.public_id)}
  //     className="delete"
  //   >
  //   </div>
  // $imagePreview = (<figure className="image is-128x128">
  //   <img src={imagePreviewUrl} style={{width: '6.25rem', height: '6.25rem'}}/></figure>
  // );

  render() {
      const { images } = this.props;
      debugger;
      return (
        <div className="container">
          <div className="section center">
            <input type="file" id="single" onChange={this.onChange} />
            <input type="file" id="multi" onChange={this.onChange} multiple />
            {images.map(image => (
              <div className="card "key={image.public_id}>
                <div className="card-image">
                  <figure className="image is-128x128" >
                    <img id="image-pre"src={image.secure_url} alt="" />
                  </figure>
                </div>
              </div>
            )
            )}
          </div>
        </div>
      );
    }
  }
ImageUploadCloudinary.propTypes = {
  images: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const { productImages } = state;
  return { images: productImages };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(productActions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps )(ImageUploadCloudinary);
