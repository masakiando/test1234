import React, {PropTypes} from 'react';

const WakeUp = (
//  {            }
) => {
  return (
    <div className="loading-wrapper fadein">
      <h4>Heroku is spinning up, one moment please...</h4>
      <div className="loading">
        <div className="background">
          <i className="icon-heroku"></i>
        </div>
        <div className="spinner" />
      </div>
    </div>
  );
};

// ComponentName.propTypes = {
//   propName  : PropTypes.型
// };

export default WakeUp;
