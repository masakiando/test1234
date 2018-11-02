import React, {PropTypes} from 'react';
import 'bulma/css/bulma.css';
var logo = require('./images/bulma-logo-white.png');

const Bulma_2 = () => {
  return (
    <div>
    { /* .hero */ }
    <section className="hero has-background-black ">
      <div className="hero-body">
        <div className="container">
          <figure className="image center">
            <img src={logo} style={{maxWidth: "512px"}}/>
          </figure>
        </div>
      </div>
    </section>
    { /* /.hero */ }

    { /* .section */ }
    <section className="section has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <article className="media notification is-info">
              <figure className="media-left is-marginless">
                <span className="icon is-medium">
                  <i className="fab fa-2x fa-css3-alt"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                  <h1 className="title is-size-4">Bulma?</h1>
                  <p className="is-size-5">
                    Bulma is a modern CSS framework from @jgthms, based on Flexbox.
                    Using Bulma, we can describe our website's design using just classes. <span className="emoticon">ᕕ( ᐛ )ᕗ</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-4">
              <article className="media notification is-primary">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fas fa-2x fa-home"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content"style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                    <h1 className="title is-size-4">...Flexbox?</h1>
                    <p className="is-size-5">
                      Flexbox is a CSS spec that makes sectioning and aligning more natural.
                      We don't need to know Flexbox but it's how Bulma works behind-the-scenes. ⦤(^ー^)⦥
                    </p>
                  </div>
                </div>
              </article>
          </div>
          <div className="column is-4">
            <article className="media notification is-warning">
              <figure className="media-left">
                <span className="icon is-medium">
                  <i className="fas fa-2x fa-home"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content"style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                  <h1 className="title is-size-4">...Classes?</h1>
                  <p className="is-size-5">
                    Instead of writing our CSS per-element, we can use predefined classes.
                    With enough classes, we can describe our website design using semantics. ٩(^ᴗ^)۶
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    { /* /.section */ }

    { /* .section */ }
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <article className="media notification has-background-white">
              <figure className="media-left">
                <span className="icon has-text-warning">
                  <i className="fab fa-lg fa-css3-alt"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                  <h1 className="title is-size-4">Columns</h1>
                  <p className="subtitle is-size-5">
                    The power of <strong>Flexbox</strong> in a simple interface
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-quarter">
            <article className="media notification has-background-white">
              <figure className="media-left">
                <span className="icon has-text-warning">
                  <i className="fab fa-lg fa-css3-alt"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                  <h1 className="title is-size-4">Form</h1>
                  <p className="subtitle is-size-5">
										The indispensable <strong>form controls</strong>, designed for maximum clarity
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-quarter">
            <article className="media notification has-background-white">
              <figure className="media-left">
                <span className="icon has-text-warning">
                  <i className="fab fa-lg fa-css3-alt"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                  <h1 className="title is-size-4">Components</h1>
                  <p className="subtitle is-size-5">
                    Advanced multi-part components with lots of possibilities
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-quarter">
            <article className="media notification has-background-white">
              <figure className="media-left">
                <span className="icon has-text-warning">
                  <i className="fab fa-lg fa-css3-alt"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                  <h1 className="title is-size-4">Modifiers</h1>
                  <p className="subtitle is-size-5">
										An <strong>easy-to-read</strong> naming system designed for humans
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-quarter">
            <article className="media notification has-background-white">
              <figure className="media-left">
                <span className="icon has-text-warning">
                  <i className="fab fa-lg fa-css3-alt"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                  <h1 className="title is-size-4">Layout</h1>
                  <p className="subtitle is-size-5">
										Design the <strong>structure</strong> of your webpage with these CSS classes
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-quarter">
            <article className="media notification has-background-white">
              <figure className="media-left">
                <span className="icon has-text-warning">
                  <i className="fab fa-lg fa-css3-alt"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content" style={{whiteSpace: "normal", backgroundColor: "transparent"}}>
                  <h1 className="title is-size-4">Elements</h1>
                  <p className="subtitle is-size-5">
										Essential interface elements that only require a <strong>single CSS class</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    { /* /.section */ }
  </div>
  );
};

export default Bulma_2;


// <div class="columns is-mobile">
//   <div class="column is-11 is-offset-1"></div>
// </div>
