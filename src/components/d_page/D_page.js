import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import Buttons from './Buttons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

class D_Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uploading: false,
      images: [

      ]
    };
    this.onChange = this.onChange.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  onChange(e) {
    event.preventDefault();
    const files = Array.from(e.target.files);
    const formData = new FormData();
    this.setState({ uploading: true });

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    axios(`/api/imageUpload`, {
      method: 'POST',
      header: {
        'Context-Types': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then(res => {
      console.log(res);
      const images = res.data;
      console.log(images[0].secure_url);
      var obj1 = {["secure_url"]: images[0].secure_url};
      var test = []
      test.push(obj1)
      console.log(obj1);
      this.setState({
        images: test
      });
    })
    .catch(err => console.log(err));
  }

  removeImage(id){
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    });
  }

  render() {
      debugger;
      const { uploading, images } = this.state;

      return (
        <div className="mycontainer">
          <div className="buttons">
            {images.map((image, i) =>
              <div key={i} className="fadein">
                <div
                  onClick={this.removeImage(image.public_id)}
                  className="delete"
                >
                 <FontAwesomeIcon icon={faTimesCircle} size="2x" />
                </div>
                <img id="image-pre"src={image.secure_url} alt="" />
              </div>
            )}
            <Buttons onChange={this.onChange} />
          </div>
        </div>
      );
    }
  }
export default D_Page;
