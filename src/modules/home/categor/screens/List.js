import React, {Component, PropTypes} from 'react';

const CategorList  = ({
  categoriesCover
}) => {
  return (
    <ul className="categor__item-list">
      {categoriesCover.map((item) =>
        <li className="categor__item"
            key={item.id}>
           <a href="" className="categor__card">
             <div className="categor__container">
               <div className="categor_img__container">
               <div className="categor_img"
                  style={{
                      backgroundImage: item.cover,
                      height:85,
                      width: 75
                  }}
                    />
               </div>
               <div className="categor__card-label">
                 {item.label}
               </div>
             </div>
           </a>
        </li>
      )}
    </ul>
  );
};

CategorList.propTypes = {
  categoriesCover: PropTypes.array
};

export default CategorList;

let categorImgStyle = {
  height:85,
  width: 75
};
