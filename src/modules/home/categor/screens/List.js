import React, {Component, PropTypes} from 'react';

const CategorList  = ({
  categoriesCover
}) => {
  return (
    <ul className="categor__item-list">
      {categoriesCover.map(cover =>
        <li className="categor__item"
            key={cover.id}>
           <a href="" className="categor__card">
             <div className="categor__container">
               <div className="categor_img__container">
               <div className="categor_img"
                  style={
                    {backgroundImage: `url("./images/categories/${cover.cover}")`},
                     categorImgStyle
                  }
                    />
               </div>
               <div className="categor__card-label">
                {cover.label}
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
