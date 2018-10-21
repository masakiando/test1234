import React, {PropTypes} from 'react';
import 'bulma/css/bulma.css';
// .hero.is-fullheight-with-navbar {
//     min-height: calc(100vh - 10.25rem);
// }
const Bulma4 = () => {
  return (
    <section className="hero is-fullheight is-fullheight-with-navbar">{ /* .hero */ }
      { /* .hero-body */ }
      <div className="hero-body">
        <div className="container">
          <div className="columns "style={{height: "70vh"}}>
            <div className="column is-one-fifth">
              <aside className="menu has-background-grey"style={{height: "100%"}}>
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
              </aside>
            </div>
            <div className="column is-four-fifths">
              <main className="has-background-grey "style={{height: "100%"}}>
                <div id="grid1">
                  <div id="a1" className="center-column">
                  <p className="has-text-centered has-text-white">
                     hello
                  </p>
                  </div>
                  <div id="b1" className="center-column">
                    <p className="has-text-white">
                      hello
                    </p>
                  </div>
                  <div id="c1" className="center-column" style={{borderLeft: "1px solid gray"}}>
                    <p className="has-text-white">
                      hello
                    </p>
                  </div>
                  <div id="d1" className="center-column" style={{borderLeft: "1px solid gray"}}>
                    <p className="has-text-white">
                      hello
                    </p>
                  </div>
                </div>
                <table className="table has-background-grey" style={{borderTop: "1rem solid red"}}>
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
        </div>
      </div>
      { /* /.hero-body */ }

    { /* /.hero */ }</section>
  );
};

export default Bulma4;
