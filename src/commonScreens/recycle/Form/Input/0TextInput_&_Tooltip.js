import React, {PropTypes} from 'react';
import { Button, Popover, Position, Tooltip } from "@blueprintjs/core";

const TextInputTooltip = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error
}) => {

  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>
        {label}
            <Tooltip content="製品名には、ブランド名と製品ラインを含める必要があります。無関係なキーワードを使用すると、製品が削除される可能性があります" position={Position.RIGHT}>
                <i className="fas fa-exclamation-circle" styles={{padding: '0rem 1rem'}}></i>
            </Tooltip>
      </label>
      <div className="field">
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control"
          type="text"/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInputTooltip.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInputTooltip;
