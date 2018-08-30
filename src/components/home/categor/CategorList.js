import React, {Component, PropTypes} from 'react';

const CategorList  = ({
  categories
}) => {
  return (
    <ul className="categor__item-list">
      {categories.map(categor =>
        <li className="categor__item"
            key={categor.id}>
           <a href="" className="categor__card">
             <div className="categor__container">
               <div className="categor_img__container">
               <div className="categor_img"
                  style={
                    {backgroundImage: `url("./images/categories/${categor.cover}")`},
                     categorImgStyle
                  }
                    />
               </div>
               <div className="categor__card-label">
                {categor.label}
               </div>
             </div>
           </a>
        </li>
      )}
    </ul>
  );
};

CategorList.propTypes = {
  categories: PropTypes.array
};

export default CategorList;

let categorImgStyle = {
  height:85,
  width: 75
};
