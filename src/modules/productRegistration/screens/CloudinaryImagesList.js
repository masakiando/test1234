import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ImageListRow = ({
  image,
  onDelete
}) => {
    const handleClick = (event) => {
      event.preventDefault();
      console.log(image.public_id);
      onDelete(image.public_id);
    };
    debugger;
    return (
      <div className="column is-3" key={image.public_id}>
        <div className="card">
            <div className="card-image">
              <figure className="image is-marginless is-square">
                <img id="image-pre"
                     src={image.secure_url} alt="" />
              </figure>
            </div>
          <div className="media-content">
            <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
              <p className="is-size-5 center">
                <a
                  href="#"
                  className="card-footer-item button is-info is-outlined"
                  style={{margin: ".5rem"}}
                >
                  <span className="icon ">
                    <i className="fas fa-home"></i>
                  </span>
                </a>
                  <a
                   value={image.public_id}
                   className="card-footer-item button is-danger is-outlined"
                   onClick={handleClick}
                   style={{margin: ".5rem"}}
                   >
                  <span className="icon" onClick={handleClick}>
                    <i className="fas fa-trash-alt" onClick={handleClick}></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      );
};

ImageListRow.propTypes = {
  image: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ImageListRow;
