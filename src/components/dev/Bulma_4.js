import React, {PropTypes} from 'react';
import 'bulma/css/bulma.css';
// .hero.is-fullheight-with-navbar {
//     min-height: calc(100vh - 10.25rem);
// }
const Bulma4 = () => {
  return (
    <section className="hero is-fullheight is-fullheight-with-navbar">{ /* .hero */ }
          <div className="columns is-marginless">
            <div className="column is-one-fifth">
              <aside className="menu has-background-grey">
                <ul className="menu-list is-marginless">
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
              </aside>
            </div>
            <div className="column is-four-fifths">
              <main className="has-background-grey" style={{height: "70vh"}}>
                <div id="grid1">
                  <div id="a1" className="center-column">
                  <p className="navbar-item has-text-white">
                     確認
                  </p>
                  </div>
                  <div id="b1" className="center-column" style={{borderLeft: "1px solid white"}}>
                    <p className="navbar-item has-text-white">
                      受け取り
                    </p>
                  </div>
                  <div id="c1" className="center-column" style={{borderLeft: "1px solid white"}}>
                    <p className="navbar-item has-text-white">
                      レビュー待ち
                    </p>
                  </div>
                  <div id="d1" className="center-column" style={{borderLeft: "1px solid white"}}>
                    <p className="navbar-item has-text-white">
                      キャンセル
                    </p>
                  </div>
                </div>
                <table className="table table is-fullwidth table is-hoverable table is-bordered has-background-grey" style={{borderTop: "1rem solid red"}}>
                  <thead>
                    <tr>
                      <th>hello</th>
                      <th>hello</th>
                      <th>hello</th>
                      <th>hello</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                      <td>hello</td>
                    </tr>
                  </tbody>
                </table>
              </main>
            </div>
          </div>
    { /* /.hero */ }</section>
  );
};

export default Bulma4;
