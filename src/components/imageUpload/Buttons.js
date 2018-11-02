import React, {PropTypes} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faImage } from "@fortawesome/free-solid-svg-icons";

const Buttons = ({
  onChange
}) => (
  <div className="columns">
    <div className="column">
      <label htmlFor="single">
        <FontAwesomeIcon icon={faImage} color="#3B5998" size="10x" />
      </label>
      <input type="file" id="single" onChange={onChange} />
    </div>

    <div className="column">
      <label htmlFor="multi">
        <FontAwesomeIcon icon={faImages} color="#6d84b4" size="10x" />
      </label>
      <input type="file" id="multi" onChange={onChange} multiple />
    </div>
  </div>
);
Buttons.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Buttons;
