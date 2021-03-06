import React, {PropTypes} from 'react';
import TextFieldGroup from '../../../commonScreens/recycle/Form/Input/TextFieldGroup';
var AvatarImgPng = require('../pictures/Avatar.png');

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
      <h1 className="title has-text-centered">Login!</h1>
      {errors.form && <div className="alert alert-danger"> {errors.form} </div>}
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
      <input
        type="submit"
        disabled={isLoading}
        value={isLoading ? 'Login...' : 'Login'}
        className="button is-success is-rounded is-fullwidth has-text-weight-bold"
        onClick={onLogin}
      />
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
