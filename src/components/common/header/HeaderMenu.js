//HeaderMenu Component
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../../actions/authActions';

import styled from 'styled-components';
import media from "styled-media-query";
import { color } from './_setting_color';
let imgStyle = {
  width: 180
};
const DivNavAndContainerWrap = styled.div`
width: 1280px;
background-color: ${color.siteNav};
padding: .5em 0em;

${media.lessThan('small')`
  display:none;
`}
`;
const Container = styled.div`
width: 1200px;
margin: 0px 40px;
`;

const Nav = styled.nav`
  overflow: hidden;
  display: flex;//初期値row
  flex-direction: row; //子要素を横並びさせる
  justify-content: space-between;
`;
const Ul = styled.ul`
display: flex;//初期値row
flex-direction: row;//子要素を横並びさせる;
margin: 0;
`;
const Li = styled.li`
margin-right: 1em;//要素右にスペースを作る
text-align: center;
flex-grow: 1;
`;

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello'
    };
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log('logout');
    this.props.actions.logout();
    // .then(
    //   () => this.context.router.push('/')
    // );
  }

  render() {
    const { isAuthenticated } = this.props.authentication;
    return (
        <DivNavAndContainerWrap>
          <Container>
            <Nav role="navigation">
               <Ul>
                  <Li><Link to="/a">チャネル販売者</Link></Li>
                  <Li><Link to="/b">アプリケーションのダウンロード</Link></Li>
                  <Li><Link to="/c">接続</Link></Li>
               </Ul>
               <Ul>
                <Li><Link to="/a">test</Link></Li>
                <Li><Link to="/b">通知</Link></Li>
                <Li><Link to="/c">ヘルプ</Link></Li>
                {isAuthenticated ? <Li><Link to="/">マイページ</Link></Li> : <Li><Link to="/SignupPage">サインアップ</Link></Li>}
                {isAuthenticated ? <Li><Link to="/" onClick={this.logout}>ログアウト</Link></Li> : <Li><Link to="/LoginPage">サインイン</Link></Li>}
               </Ul>
            </Nav>
          </Container>
        </DivNavAndContainerWrap>
    );
  }
}

HeaderMenu.propTypes = {
  authentication: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  debugger;
  return {
    authentication: state.authentication
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
