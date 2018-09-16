import React, {PropTypes} from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';

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
      <h1>Join our community!</h1>
      <TextFieldGroup
        onChange={onChange}
        name="username"
        label="Username"
        value={username}
        error={errors.username}
        type="text"
        checkUserExists={checkUserExists}
      />

      <TextFieldGroup
         onChange={onChange}
         name="email"
         label="Email"
         value={email}
         error={errors.email}
         type="text"
         checkUserExists={checkUserExists}
        />

    <TextFieldGroup
        onChange={onChange}
        name="password"
        label="Password"
        value={password}
        error={errors.password}
        type="password"
      />

    <TextFieldGroup
        onChange={onChange}
        name="passwordConfirmation"
        label="Password Confirmation"
        value={passwordConfirmation}
        error={errors.passwordConfirmation}
        type="password"
      />

        <div className="sp-card">
          <button
            className={classnames('btn-signup width-100',
                                 { 'hello-error width-100': inValid.username || inValid.email || Object.keys(errors).length > 0},
                                 { 'warning-error width-100': isLoading }
                      )}
            disabled={inValid.username || inValid.email || isLoading}>
            {inValid.username == true || inValid.email == true || Object.keys(errors).length > 0 ? 'Disabled Sign up' : isLoading ? 'Sign up...' : 'Sign up'}
          </button>
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
  checkUserExists: PropTypes.func
};

export default SignupForm;
