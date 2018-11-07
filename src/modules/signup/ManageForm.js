import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from './screens/Form';
import * as Actions from './actions/Actions';
// common actions
import * as flashMessagesActions from './../../actions/flashMessagesActions';
var commonValidations = require('./validations/Validator');
import toastr from 'toastr';

class SignupPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      inValid: {
        username: false,
        email: false
      }
    };
    this.updaTetargetState = this.updaTetargetState.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  updaTetargetState(event) {
    this.setState({
       [event.target.name]: event.target.value
     });
  }

  // onBlur 一意生validations
  checkUserExists(event) {
    //
    // const field = event.target.name;
    // const val = event.target.value;
    // let errors = this.state.errors;
    // let inValid = this.state.inValid;
    // let newinValid;
    //
    // if (val !== '') {
    //   this.props.signupActions.isUserExists(val).then(res => {
    //     if (res.data.errors) {
    //       errors[field] = 'There is user with such ' + field;
    //       console.log(res);
    //       newinValid = true;
    //     } else {
    //       errors[field] = '';
    //       newinValid = false;
    //     }
    //     inValid[field] = newinValid;
    //     this.setState({inValid: inValid});
    //     this.setState({ errors });
    //   });
    // } else {
    //   errors[field] = '';
    //   newinValid = false;
    // }
    // inValid[field] = newinValid;
    // this.setState({inValid: inValid});
    // this.setState({ errors });
  }

  //cliant Side validate
  SignupFormIsValid() {
    let formIsValid = true;
    const { errors, isValid } = commonValidations(this.state);

    if (!isValid) { //errors
      this.setState({ errors: errors });
      formIsValid = false;//2017 5/21 true からfales変更
    }
    return formIsValid;
  }

  onSignup(event) {

    event.preventDefault();
    console.log(this.state);
    if(!this.SignupFormIsValid()) { //falseなら処理終了
      return;
    }

    //Server Side userSignupRequest start
    this.setState({ errors: {}, isLoading: true });
    this.props.signupActions.userSignupRequest(this.state)
      .then(() => this.redirect())
      .catch( error => {
        this.setState({
          errors: error.response.data,
          isLoading: false
        });
      });
  }

  redirect() {

    // toastr.success('Signup saved');
    this.props.flashMessagesActions.addFlashMessage({
      type: 'success',
      text: 'You signed up seccessfully. Welcome!'
    });
    this.context.router.push('/LoginPage');
    }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Form
            onChange={this.updaTetargetState}
            onSignup={this.onSignup}
            username={this.state.username}
            email={this.state.email}
            password={this.state.password}
            passwordConfirmation={this.state.passwordConfirmation}
            errors={this.state.errors}
            isLoading={this.state.isLoading}
            inValid={this.state.inValid}
            checkUserExists={this.checkUserExists}
          />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  signupActions: PropTypes.object.isRequired,
  flashMessagesActions: PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
SignupPage.contextTypes = {
  router: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    signupActions: bindActionCreators(Actions, dispatch),
    flashMessagesActions: bindActionCreators(flashMessagesActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignupPage);