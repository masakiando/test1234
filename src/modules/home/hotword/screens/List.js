import React, {PropTypes} from 'react';

const HotwordList  = ({
  hotwords
}) => {
  return (
    <ul className="hotword__item-list">
      {hotwords.map(hotword =>
        <li className="hotword__item"
            key={hotword.id}>
           <a href="" className="">
             <div className="hotword-label_to_hotword-limg">
               <div className="hotword-img"
                  style={
                    {
                      backgroundImage: `url(require("images/hotwords/${hotword.cover}"))`,
                      height:80,
                      width: 110
                    }
                  }
                    />
                  <div className="hotword-label">
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
