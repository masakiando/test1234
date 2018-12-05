import React, {PropTypes}    from 'react';

/** Label with required field display, htmlFor, and block stying */
function Label(props) {
  return (
    <p className="help is-danger">
      {props.label}
    </p>
  );
}

// Label.propTypes = {
//   /** HTML ID for assoceated input */
//   htmlFor: PropTypes.string.isRequired,
//
//   /** Label text */
//   label: PropTypes.string.isRequired,
//
//   /** Display asterickk after */
//   required: PropTypes.bool
// }

export default Label;
