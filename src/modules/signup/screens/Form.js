import React, {PropTypes} from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import TextFieldGroup from '../../../commonScreens/recycle/Form/Input/TextFieldGroup';

const SignupForm = ({
  onChange,
  onSignup,
  username,
  email,
  password,
  passwordConfirmation,
  errors,
  isLoading,
  inValid,
  checkUserExists
}) => {
  // const { errors } = this.state;
  return (
    <form onSubmit={onSignup}>
      <h1 className="title has-text-centered">Sign up!</h1>
      {errors.form && <div className="alert alert-danger"> {errors.form} </div>}
      <TextFieldGroup
        onChange={onChange}
        name="username"
        label="Username"
        value={username}
        error={errors.username}
        type="text"
        checkUserExists={checkUserExists}
        min="5"
        icons="icon is-small is-left"
        fontawesome="fas fa-user"
      />
      <TextFieldGroup
        onChange={onChange}
        name="email"
        label="Email"
        value={email}
        error={errors.email}
        type="text"
        checkUserExists={checkUserExists}
        icons="icon is-small is-left"
        fontawesome="fas fa-envelope"
      />
      <TextFieldGroup
        onChange={onChange}
        name="password"
        label="Password"
        value={password}
        error={errors.password}
        type="password"
        min="5"
        icons="icon is-small is-left"
        fontawesome="fas fa-lock"
      />

      <TextFieldGroup
        onChange={onChange}
        name="passwordConfirmation"
        label="Password Confirmation"
        value={passwordConfirmation}
        error={errors.passwordConfirmation}
        type="password"
        min="5"
        icons="icon is-small is-left"
        fontawesome="fas fa-lock"
      />

      <div className="field">
        <label className="checkbox">
          <input type="checkbox"/>
            I accept the <a href="#">terms</a>&<a href="#">privacy policy</a>
        </label>
      </div>

      <input
        type="submit"
        disabled={isLoading}
        value={isLoading ? 'Save...' : 'Save'}
        className="button is-success is-rounded is-fullwidth"
        onClick={onSignup}
      />

      <div className="field center">
        <p className="has-text-centered ">
          or sign up with
        </p>
      </div>

      <div className="field login-grid">
        <a className="button is-link a-login">
          Save changes
        </a>
        <a className="button is-danger b-login">
          Delete post
        </a>
      </div>

      <div className="field center">
        <p className="has-text-centered ">
          <a href="#">terms</a>&<a href="#">Already have an account? Log in</a>
        </p>
      </div>
    </form>
  );
};

//this.props list
SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  errors: PropTypes.object,
  isLoading: PropTypes.bool,
  inValid: PropTypes.object,
  checkUserExists: PropTypes.func,
  showPassword: PropTypes.bool
};

export default SignupForm;
