import React from 'react';
import { Link, IndexLink } from 'react-router';
import logo from './logo.png';

let imgStyle = {
  width: 180
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello'
    };
  }
  render() {
    return (
      <header id="top">
        <div className="navigation-wrapper">
          <div className="container">
            <nav role="navigation">
               <ul className="haeder-ul">
                  <li><a href="">チャネル販売者</a></li>
                  <li><a href="">アプリケーションのダウンロード</a></li>
                  <li><a href="">接続</a></li>
               </ul>
               <ul className="haeder-ul">
                    <li><a href="">test</a></li>
                    <li><a href="">通知</a></li>
                    <li><a href="">ヘルプ</a></li>
                    <Link to="/regis">サインアップ</Link>
                    <Link to="/login">サインイン</Link>
               </ul>
            </nav>
          </div>
        </div>

        <div className="grid-wrap">
          <div className="container">
          <div className="       header-body">
            <div className="logo header-body__grid-ItemA">
              <a href="">
                <img src={logo} style={imgStyle} alt="logo"/>
              </a>
            </div>

            <form className="logo header-body__grid-ItemB">
                <div className="wrapper">

                  <div className="form__search">
                    <input
                      name="form__search"
                      placeholder="test"

                      value="test"
                      type="text"/>
                    <button type="submit">
                      <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                    </button>
                  </div>

                  <ul className="form__category">
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                  </ul>
                </div>
            </form>

          <div className="header-body__grid-ItemD">
             <a href="">
               <i
                 className=" fas fa-shopping-cart fa-2x "
                 title="cart">
               </i>
            </a>
          </div>

       </div>
      </div>
    </div>
      </header>
    );
  }
}

export default Header;
