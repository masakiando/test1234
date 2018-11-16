import React, {PropTypes} from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({
  name,
  label,
  value,
  onChange,
  error,
  type,
  checkUserExists, //signupで利用
  min,
  icons,
  fontawesome,
  icons2,
  fontawesome2
}) => {
  return (
    <div className="field is-marginless">
      <label className={classnames("field-label is-normal", { 'is-danger': error })}>
        <span>{label}</span>
      </label>
      <div className="field-body">
        <div className="field">
          <div className="control has-icons-left">
            <input
              value={value}
              onChange={onChange}
              onBlur={checkUserExists}
              type={type}
              name={name}
              className={classnames("input", {'is-danger': error})}
              />
            <span className={icons}>
              <i className={fontawesome}></i>
            </span>
          </div>
        </div>
      </div>
      {error ? <div className="has-text-danger">{error}</div> : <div><br/></div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  checkUserExists: PropTypes.func,
  min: PropTypes.string,
  icons: PropTypes.string,
  fontawesome: PropTypes.string,
  icons2: PropTypes.string,
  fontawesome2: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
