import React, {PropTypes}    from 'react';
import Label from '../Elements/Label';

function HorizontalFieldLabel(props) {
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
          <Label label={props.bottomLabel}/>
        </div>
      </div>
    </div>
  );
}
HorizontalFieldLabel.defaultProps = {
  controlClass: 'control'
};

export default HorizontalFieldLabel;
