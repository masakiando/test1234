import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import SignupPage           from '../signup/ManageFormPF';
import LoginPage            from '../login/ManageFormPF';
import ProductsPage         from '../home/daily/ManageListPF';
import SingleProductPage    from '../singleProduct/ManageFormPF';
// import * as Actions from './actions/Actions';
// import * as Selector from './selectors/AuthorsSelector';
// import Form from './screens/Form';
// var commonValidations =  require('./validations/Validator');

// import toastr from 'toastr';

class ManagePortfolio extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
      { /* .hero */ }
      <section className="hero">
        <div className="hero-body portfolio_header">
          <div className="container">
            <div className="columns">
              { /* .column is-8 */ }
              <div className="column is-8 title has-text-white-bis">
                <p>All you want is a <strong>fast, secure web</strong>? That's why we use ad blockers, too, you know. We gotta keep those servers running though... So we've set up
                  <a className="has-text-grey-light"href="/"><em> Membership </em></a> for smart cookies like you. Coming up next:
                </p>
                <ol style={{paddingLeft: "2rem"}}className="subtitle has-text-white-bis">
                  <li style={{listStyleType: "decimal"}}><em>signup</em> signup,</li>
                  <li style={{listStyleType: "decimal"}}><em>JWT</em> を使用して <em>loginページ</em> を実装しています。</li>
                  <li style={{listStyleType: "decimal"}}>商品の一覧<a className="has-text-grey-light" href="https://www.crowdcast.io/e/introduction-to-machine-learning/register">Introduction To Machine Learning And Artificial Intelligence</a>,</li>
                  <li style={{listStyleType: "decimal"}}>１つの商品<a className="has-text-grey-light" href="https://www.crowdcast.io/e/state-of-the-web-in-south-east-asia/register">State Of The Web In South East Asia</a>,</li>
                  <li style={{listStyleType: "decimal"}}>カート内の商品</li>
                  <li style={{listStyleType: "decimal"}}>商品の決済</li>
                  <li style={{listStyleType: "decimal"}}>商品の購入履歴</li>
                </ol>
              </div>
              { /* /.column is-8 */ }
              <div className="column is-4">
                is-4
              </div>
            </div>
          </div>
        </div>
      </section>
      { /* /.hero */ }

      { /* .section */ }
      <section className="section has-background-light">
        <div className="container">
          { /* .columns  SignupPage LoginPage*/ }
          <div className="columns">
            <div className="column is-6">
              <article className="media notification is-info">
                <figure className="media-left is-marginless">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                    <h1 className="title is-size-4">signup</h1>
                    <SignupPage />
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-6">
                <article className="media notification is-primary">
                  <figure className="media-left">
                    <span className="icon is-medium">
                      <i className="fas fa-2x fa-home"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content"style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                      <h1 className="title is-size-4">login</h1>
                      <LoginPage />
                    </div>
                  </div>
                </article>
            </div>
          </div>
          { /* /.columns  SignupPage LoginPage*/ }

          { /* .columns  ProductsPage*/ }
          <div className="columns">
            <div className="column is-12">
              <article className="media notification sponsors-5743">
                <figure className="media-left is-marginless">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                    <h1 className="title is-size-4">商品一覧</h1>
                    <ProductsPage />
                  </div>
                </div>
              </article>
            </div>
          </div>
          { /* .columns  ProductsPage */ }

          { /* .columns  １つの商品 カート内の商品*/ }
          <div className="columns">
            <div className="column is-6">
              <article className="media notification events__blue has-text-white-bis">
                <figure className="media-left is-marginless">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                    <h1 className="title is-size-4">１つの商品</h1>
                    <SingleProductPage />
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-6">
                <article className="media notification events__green has-text-white-bis">
                  <figure className="media-left">
                    <span className="icon is-medium">
                      <i className="fas fa-2x fa-home"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content"style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                      <h1 className="title is-size-4">カート内の商品</h1>

                    </div>
                  </div>
                </article>
            </div>
          </div>
          { /* /.columns  １つの商品 カート内の商品*/ }

          { /* .columns  商品の決済 商品の購入履歴*/ }
          <div className="columns">
            <div className="column is-6">
              <article className="media notification events__navy has-text-white-bis">
                <figure className="media-left is-marginless">
                  <span className="icon is-medium">
                    <i className="fab fa-2x fa-css3-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                    <h1 className="title is-size-4">商品の決済</h1>

                  </div>
                </div>
              </article>
            </div>
            <div className="column is-6">
                <article className="media notification sponsors-5743 has-text-white-bis">
                  <figure className="media-left">
                    <span className="icon is-medium">
                      <i className="fas fa-2x fa-home"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content"style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                      <h1 className="title is-size-4">商品の購入履歴</h1>

                    </div>
                  </div>
                </article>
            </div>
          </div>
          { /* /.columns  商品の決済 商品の購入履歴*/ }

          { /* .section */ }
        </div>
      </section>
      { /* /.section */ }
    </div>
    );
  }
}



export default ManagePortfolio;
