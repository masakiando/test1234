import React, {PropTypes} from 'react';

const Textarea = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error
}) => {

  let wrapperClass = 'field is-horizontal ';
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
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="textarea has-fixed-size"
          type="text"
           rows="4"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </p>
      </div>
      </div>
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default Textarea;
