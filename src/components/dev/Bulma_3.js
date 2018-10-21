import React, {PropTypes} from 'react';
import 'bulma/css/bulma.css';
var logo = require('./images/bulma-logo-white.png');

const Bulma_3 = () => {
  return (
    <section classNameName="section">
      { /* .section */ }
      <div className="container">
        <div className="columns">
          <div className="column is-four-fifths">is-four-fifths</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>

        <div className="columns">
          <div className="column is-three-quarters">is-three-quarters</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>

        <div className="columns">
          <div className="column is-two-thirds">is-two-thirds</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>

        <div className="columns">
          <div className="column is-three-fifths">is-three-fifths</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>

        <div className="columns">
          <div className="column is-half">is-half</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>

        <div className="columns">
          <div className="column is-two-fifths">is-two-fifths</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>

        <div className="columns">
          <div className="column is-one-third">is-one-third</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>

        <div className="columns">
          <div className="column is-one-quarter">is-one-quarter</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>

        <div className="columns is-centered">
          <div className="column is-one-fifth">
            <aside className="menu has-background-grey">
              <ul className="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                  <a className="is-active">Manage Your Team</a>
                  <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                  </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
              </ul>
              <ul className="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
              </ul>
            </aside>
          </div>
          <div className="column is-four-fifths">
            <div id="grid" className="has-background-grey ">
              <div id="a" className="center-column">
              <p className="navbar-item has-text-centered has-text-white">
                 hello
              </p>
              </div>
              <div id="b" className="center-column">
                <p className="navbar-item has-text-white">
                  hello
                </p>
              </div>
              <div id="c" className="center-column" style={{borderLeft: "1px solid gray"}}>
                <p className="navbar-item has-text-white">
                  hello
                </p>
              </div>
              <div id="d" className="center-column" style={{borderLeft: "1px solid gray"}}>
                <p className="navbar-item has-text-white">
                  hello
                </p>
              </div>
              <div id="e" className="center-column">
                <p className="navbar-item has-text-white">
                  hello
                </p>
              </div>
            </div>
            <table className="table has-background-grey">
              <thead>
                <tr>
                  <th>hello</th>
                  <th>hello</th>
                  <th>hello</th>
                  <th>hello</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>hello</th>
                  <th>hello</th>
                  <th>hello</th>
                  <th>hello</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="columns">
          <div className="column">is-2</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-3">is-3</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-4">is-4</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-5">is-5</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-6">is-6</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-7">is-7</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-8">is-8</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-9">is-9</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-10">is-10</div>
          <div className="column">Auto</div>
          <div className="column">Auto</div>
        </div>
        <div className="columns">
          <div className="column is-11"></div>
          <div className="column">Auto</div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <div className="content">hello </div>
                <div className="content">
                  <table className="table has-background-grey">
                    <thead>
                      <tr>
                        <th>hello</th>
                        <th>hello</th>
                        <th>hello</th>
                        <th>hello</th>
                        <th>hello</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>hello</th>
                        <th>hello</th>
                        <th>hello</th>
                        <th>hello</th>
                        <th>hello</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <p className="title">Tall tile</p>
                <p className="subtitle">With even more content</p>
                <div className="content">
                  <aside className="menu has-background-grey">
                    <ul className="menu-list">
                      <li><a>Team Settings</a></li>
                      <li>
                        <a className="is-active">Manage Your Team</a>
                        <ul>
                          <li><a>Members</a></li>
                          <li><a>Plugins</a></li>
                          <li><a>Add a member</a></li>
                        </ul>
                      </li>
                      <li><a>Invitations</a></li>
                      <li><a>Cloud Storage Environment Settings</a></li>
                      <li><a>Authentication</a></li>
                    </ul>
                    <ul className="menu-list">
                      <li><a>Payments</a></li>
                      <li><a>Transfers</a></li>
                      <li><a>Balance</a></li>
                    </ul>
                  </aside>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

    { /* ./section */ }
    </section>
  );
};

export default Bulma_3;


// <div className="columns is-mobile">
//   <div className="column is-11 is-offset-1"></div>
// </div>
