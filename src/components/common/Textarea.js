import React, {PropTypes} from 'react';


const Textarea = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  onClick,
  expanded,
  onBlur
}) => {

  let wrapperClass = 'form-group ';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field" >
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}

          className="form-control"
          type="text"
          style={expanded !== true ? {height: '38px',padding: '6px'} : {height: '124px',padding: '6px'}}
          cols={40} rows={10} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  expanded: PropTypes.bool.isRequired
};

export default Textarea;
