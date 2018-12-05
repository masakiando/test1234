import React, {PropTypes} from 'react';

const HorizontalField = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  type
}) => {

  let wrapperClass = 'field is-horizontal';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label className="field-label is-normal" htmlFor={name}>
        <label className="label">{label}</label>
      </label>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="input"
              type={type}/>
            {error && <div className="alert alert-danger">{error}</div>}
          </p>
        </div>
      </div>
    </div>
  );
};
HorizontalField.defaultProps = {
  type: 'text'
};

HorizontalField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password'])
};

export default HorizontalField;
