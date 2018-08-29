import React, {PropTypes} from 'react';

const HotwordList  = ({
  hotwords
}) => {
  return (
    <ul className="hotword__item-list">
      {hotwords.map(hotword =>
        <li className="hotword__item"
            key={hotword.id}>
           <a href="" className="hotword__card">
             <div className="hotword__container">
               <div className="hotword_img"
                  style={
                    {
                      backgroundImage: `url(require("images/hotwords/${hotword.cover}"))`,
                      height:80,
                      width: 110
                    }
                  }
                    />
               <div className="hotword__card-label">
                 {hotword.label}
              </div>
             </div>
           </a>
        </li>
      )}
    </ul>
  );
};

HotwordList.propTypes = {
  hotwords: PropTypes.array
};

export default HotwordList;
// let hotwordImgStyle = {
//   backgroundImage: `url(require("./images/hotwords/${hotword.cover}"))`,
//   height:80,
//   width: 110
// };

// backgroundImage: `url("./images/hotwords/${hotword.cover}")`},
