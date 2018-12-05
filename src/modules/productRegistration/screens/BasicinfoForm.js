import React, {PropTypes} from 'react';
import TextInput             from '../../../commonScreens/recycle/Form/Input/TextInput';
import Textarea              from '../../../commonScreens/recycle/Form/Textarea/TextArea';
import CategoryDropdown      from '../screens/CategoryDropdown';

const BasicinfoForm = ({
  product,
  errors,
  onChange,
  categories,
  updateState
 }) => {
  return (
    <div className="basicinfo">
      <div className="basicinfo__title">
        <h2 className="title">基本情報</h2>
      </div>
      <div className="basicinfo__input">
        <TextInput
          name="product_name"
          label="product name"
          placeholder="商品名を入力してください"
          value={product.product_name}
          error={errors.product_name}
          onChange={onChange}/>
          <Textarea
            name="product_discrption"
            label="product discrption"
            placeholder="商品説明を入力してください"
            value={product.product_discrption}
            error={errors.product_discrption}
            onChange={onChange}
          />
          <CategoryDropdown
            categories={categories}
            product={product}
            updateState={updateState}/>
      </div>
    </div>
  );
};

BasicinfoForm.propTypes = {
  product: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  updateState: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default BasicinfoForm;
