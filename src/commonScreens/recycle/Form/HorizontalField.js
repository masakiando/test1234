import React, {PropTypes}    from 'react';

function HorizontalField(props) {
  return (
    <div className="field is-horizontal"
         style={props.style}>
      <label className="field-label is-normal">
        <label className="label">
          {props.label}
        </label>
      </label>
      <div className="field-body">
        <div className="field">
          <div className={props.controlClass}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
HorizontalField.defaultProps = {
  controlClass: 'control'
};

export default HorizontalField;
