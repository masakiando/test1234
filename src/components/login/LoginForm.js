import React, {PropTypes} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

const LoginForm = ({
  onChange,
  onLogin,
  identifier,
  password,
  errors,
  isLoading
}) => {
  return (
    <form onSubmit={onLogin}>
      <h1>LoginForm</h1>
      <TextFieldGroup
        onChange={onChange}
        name="identifier"
        label="Username / Email"
        value={identifier}
        error={errors.identifier}
        type="text"
      />
      <TextFieldGroup
        onChange={onChange}
        name="password"
        label="Password"
        value={password}
        error={errors.password}
        type="password"
      />
      <div className="form-group">
        <button disabled={isLoading}
                className="btn btn-primary btn-lg">
          {isLoading ? 'Loging...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  identifier: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object,
  isLoading: PropTypes.bool
};


LoginForm.defaultProps = {
  hello: 'hello Login'
};
export default LoginForm;
