import React, {PropTypes} from 'react';
import LocalViewImageUpload  from '../screens/LocalViewImageUpload';
import CloudinaryImageUpload from '../screens/CloudinaryImageUpload';
import HorizontalField       from '../../../commonScreens/recycle/Form/HorizontalField';

const ProductImageForm = ({product, updateState}) => {
  return (
    <div className="productImage">
      <div>
        <h2 className="title">製品画像</h2>
      </div>
      <HorizontalField label="imege cover">
        <LocalViewImageUpload
          product={product}
          updateState={updateState}
        />
      </HorizontalField>
      <HorizontalField label="imege options">
        <CloudinaryImageUpload
          product={product}
          updateState={updateState}
        />
      </HorizontalField>
    </div>
  );
};

ProductImageForm.propTypes = {
  product: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
};

export default ProductImageForm;
