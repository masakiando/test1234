import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions/Actions';
import { Wrap, Container, Nav, Ul, Li } from './styles/MenuStyled';

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.actions.logout();
  }

  render() {
    const { isAuthenticated } = this.props.authentication;
    return (
      <Wrap>
        <Container>
          <Nav role="navigation">
             <Ul>
                <Li><Link to="/#">チャネル販売者</Link></Li>
                <Li><Link to="/ManageProductPage">アプリケーションのダウンロード</Link></Li>
                <Li><Link to="/#">接続</Link></Li>
             </Ul>
             <Ul>
              <Li><Link to="/dev">開発</Link></Li>
              <Li><Link to="/#">通知</Link></Li>
              <Li><Link to="/#">ヘルプ</Link></Li>
              {isAuthenticated ? <Li><Link to="/user/purchase">マイページ</Link></Li> : <Li><Link to="/SignupPage">サインアップ</Link></Li>}
              {isAuthenticated ? <Li><Link to="/" onClick={this.logout}>ログアウト</Link></Li> : <Li><Link to="/LoginPage">サインイン</Link></Li>}
             </Ul>
          </Nav>
        </Container>
      </Wrap>
    );
  }
}

HeaderMenu.propTypes = {
  authentication: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    authentication: state.authentication
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
