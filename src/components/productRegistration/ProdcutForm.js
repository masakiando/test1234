import React, {PropTypes} from 'react';
import styled from 'styled-components';
import TextInput from '../common/TextInput.js';
import Textarea from '../common/Textarea.js';
import CategoryDropdown from './CategoryDropdown';
import Dropdown from './Dropdown';

class ProdcutForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
			expanded: false,
      attributeOptions: [],
      attributeOptions2: [],
      attributeOptionsOpen: false
		};
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.collapse = this.collapse.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  updateState(state){
     this.setState(state);
     //親コンポーネントを更新
     this.props.updateState(state);
   }

  handleTriggerClick() {
    if(this.state.expanded !== true){
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }

  attributeOptions2() {
    return this.state.attributeOptions.map( (item, index) => {
        return (
          <Dropdown
           key={item.attribute_key_id}
           name={item.attribute_key_name}
           label={item.attribute_key_name}
           categories={this.props.categories}
           options={this.state.attributeOptions2}
           product={this.props.product}
           updateState={this.updateState}
          />
                  );
    });
  }

  collapse() {
    this.setState({
      expanded: false
    });
  }

  render() {
    const {
      product, errors, onChange, categories
    } = this.props;
    return (
      <div className="test_wrapper_001">
        <form>
          <div className="grid_basicinfo">
            <div className="grid_basicinfo_title"><h2>基本情報</h2></div>
            <div className="grid_basicinfo_input">
              <div>
                <TextInput
                  name="product_name"
                  label="product name"
                  placeholder="商品名を入力してください"
                  value={product.product_name}
                  error={errors.product_name}
                  onChange={onChange}
                />
              </div>
              <div>
                <Textarea
                  name="product_discrption"
                  label="product discrption"
                  placeholder="商品説明を入力してください"
                  value={product.product_discrption}
                  error={errors.product_discrption}
                  onChange={onChange}
                  expanded={this.state.expanded}
                  onClick={this.handleTriggerClick}
                  onBlur={this.collapse}
                />
              </div>
              <div>
                <CategoryDropdown
                 categories={categories}
                 product={product}
                 updateState={this.updateState}
                />
             </div>
          </div>
          </div>
          {this.state.attributeOptionsOpen &&
            <div className="gird_price_and_warehouse">
              <div className="grid_price_and_warehouse"><h2>属性オプション</h2></div>
              <div className="grid_price_and_warehouse_input">
                <div>
                  <div>{this.attributeOptions2()}</div>
                </div>
              </div>
            </div>
          }

          <div className="gird_price_and_warehouse">
            <div className="grid_price_and_warehouse"><h2>価格と倉庫</h2></div>
            <div className="grid_price_and_warehouse_input">
              <div>

              </div>
              <div>hello</div>
              <div>hello</div>
            </div>
          </div>

      </form>
    </div>
    );
  }
}

ProdcutForm.propTypes = {
  product: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default ProdcutForm;
