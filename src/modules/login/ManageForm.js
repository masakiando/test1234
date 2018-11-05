import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from './screens/Form';
import * as Actions from './actions/Actions';
var commonValidations =  require('./validations/Validator');
import toastr from 'toastr';


class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.updaTetargetState = this.updaTetargetState.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  updaTetargetState(event) {
    this.setState({
       [event.target.name]: event.target.value
     });
  }

  isValid() { //nullか検証 TextFieldGroupにerror表示
      const { errors, isValid } = commonValidations(this.state);
      if(!isValid) {
        this.setState({ errors });
      }
      return isValid;
      //commonValidationsでerrorsがあったらfalse,errorsなければtrue
  }

  onLogin(event) {
    event.preventDefault();
    if (this.isValid()) { //isValid true なら処理実行
      this.setState({ //1回目の commonValidations でerrorあったら{}に値あるため空にする
        errors: {},
        isLoading: true
      });
      this.props.actions.login(this.state).then(
        (res) => this.context.router.push('/'),//成功
        (err) => this.setState({errors: err.response.data.errors,isLoading: false})//失敗 処理
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Form
            onChange={this.updaTetargetState}
            onLogin={this.onLogin}
            identifier={this.state.identifier}
            password={this.state.password}
            errors={this.state.errors}
            isLoading={this.state.isLoading}
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired
};

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
