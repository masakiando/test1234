import React, {PropTypes}   from 'react';

class GoogleSignin extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="field login-grid">
          <a className="button is-link a-login">
            Save changes
          </a>
          <a className="button is-danger b-login">
            Delete post
          </a>
          <div className="sun"></div>
          <div className="cloud bottom-right"></div>
          <div className="cloud top-right"></div>
          <div className="cloud bottom-left"></div>
          <div className="balloon"></div>
          <div className="basket"></div>
        </div>
      </div>
    );
  }
}

export default GoogleSignin;
