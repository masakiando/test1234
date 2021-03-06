import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/Actions';
import CloudinaryImagesList from './CloudinaryImagesList';

class CloudinaryImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uploading: false
    };
    this.onChange = this.onChange.bind(this);
    this.deleteImeage = this.deleteImeage.bind(this);
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

  deleteImeage(Id) {
    console.log(Id);
    this.props.actions.deletePostImage(Id);
  } //. ※ bindを忘れない!

  render() {
      const { images } = this.props;
      debugger;
      return (
        <div>
          <input type="file" id="single" onChange={this.onChange} />
          <input type="file" id="multi" onChange={this.onChange} multiple />
          <div className="columns">
          {images.map(image => (
            <CloudinaryImagesList
              key={image.public_id}
              image={image}
              onDelete={this.deleteImeage}
            />
          )
          )}
          </div>
        </div>
      );
    }
  }
  CloudinaryImageUpload.propTypes = {
    images: PropTypes.array,
    actions: PropTypes.object.isRequired
  };

function mapStateToProps(state, ownProps) {
  const { productImages } = state;
  return { images: productImages };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps )(CloudinaryImageUpload);
