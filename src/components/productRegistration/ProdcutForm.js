import React, {PropTypes} from 'react';
import styled from 'styled-components';
import TextInput from '../common/TextInput.js';
import Textarea from '../common/Textarea.js';
import Dropdown from './Dropdown';

class ProdcutForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
			expanded: false
		};
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  handleTriggerClick() {
    if(this.state.expanded !== true){
      this.setState({
        expanded: !this.state.expanded
      });
    }
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
      <form>
        <Div2><h2>基本情報</h2></Div2>
        <Div style={{marginTop: '0em'}}>
              <TextInput
                name="product_name"
                label="product name"
                placeholder="商品名を入力してください"
                value={product.product_name}
                error={errors.product_name}
                onChange={onChange}
              />
        </Div>
        <Div>
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
        </Div>
        <Dropdown
          categories={categories}
        />
      </form>
    );
  }
}

ProdcutForm.propTypes = {
  product: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default ProdcutForm;

export const Div = styled.div`
margin: 50px auto;
width: 800px;
`;
export const Div2 = styled.div`
margin: 10px 0px 0px 30px;
width: 800px;
`;
