import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import Spinner from './Spinner';
import Images from './Images';
import Buttons from './Buttons';
import { API_URL } from './config';
import WakeUp from './WakeUp';


class D_Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uploading: false,
      images: []
    };
    this.onChange = this.onChange.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({
        uploading: false,
        images
      });
    });
  }

  removeImage(id){
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    });
  }

    render() {
      const { uploading, images } = this.state;

      const content = () => {
        switch(true) {
          case uploading:
            return <Spinner />;
          case images.length > 0:
            return <Images images={images} removeImage={this.removeImage} />;
          default:
            return <Buttons onChange={this.onChange} />;
        }
      };

      return (
        <div className="mycontainer">
          <div className="buttons">
            {content()}
          </div>

        </div>
      );
    }
  }
export default D_Page;
