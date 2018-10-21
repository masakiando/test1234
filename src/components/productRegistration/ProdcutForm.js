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
      attributeOptionsOpen: false,
      classificationGroup1: 1
		};
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.collapse = this.collapse.bind(this);
    this.updateState = this.updateState.bind(this);
    this.openProductClassificationField = this.openProductClassificationField.bind(this);
    this.addProductClassification = this.addProductClassification.bind(this);
    this.renderclassificationRow = this.renderclassificationRow.bind(this);
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

  openProductClassificationField() {
    alert('hello openProductClassificationField');
  }

  attributeOptions2() {
    return this.state.attributeOptions.map( (item, index) => {
        return (
          <Dropdown
           className={`gird_dropdown_${index+1}`}
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

  setTriggerStyles(){
      return {
        borderWidth: '1px 1px 1px 1px',
        borderColor: '#00bfa5',
        borderStyle: 'dashed'
      };
  }
  nameSet(i, product) {
    if(i === 1){return product.classification_name_1;}
    if(i === 2){return product.classification_name_2;}
    if(i === 3){return product.classification_name_3;}
    if(i === 4){return product.classification_name_4;}
  }
  priceNameSet(i, product) {
    if(i === 1){return product.product_price_1;}
    if(i === 2){return product.product_price_2;}
    if(i === 3){return product.product_price_3;}
    if(i === 4){return product.product_price_4;}
  }

  stockNameSet(i, product) {
    if(i === 1){return product.product_stock_1;}
    if(i === 2){return product.product_stock_2;}
    if(i === 3){return product.product_stock_3;}
    if(i === 4){return product.product_stock_4;}
  }
  skuNameSet(i, product) {
    if(i === 1){return product.product_sku_1;}
    if(i === 2){return product.product_sku_2;}
    if(i === 3){return product.product_sku_3;}
    if(i === 4){return product.product_sku_4;}
  }
  renderclassificationGroup1() {
    const { product, onChange, errors } = this.props;
    const render = [];
    console.log(this.state.classificationGroup1);
    for (let i = 0; i < this.state.classificationGroup1; i++) {
      render.push(
        <li key={i}>
          <TextInput
            name={`classification_name_${i+1}`}
            label=""
            placeholder="分類名を入力してください"
            value={this.nameSet(i+1, product)}
            error={errors.classification_name_1}
            onChange={onChange}
          />
        </li>
      );
    }
    return render;
  }

 renderclassificationRow() {
    const { product, onChange, errors } = this.props;
    const render = [];
     debugger;
    for (var i = 0; i < this.state.classificationGroup1; i++) {
      render.push(
      <tr>
        <td className="testTd">{this.nameSet(i+1, product)}</td>
        <td className="testTd" style={{padding: '0px'}}>
            <input
              style={{width:'100%', height: '100%'}}
              name={`product_price_${i+1}`}
              value={this.priceNameSet(i+1, product)}
              onChange={onChange}
              className=""
              type="number"/>
            {product.errors && <div className="alert alert-danger">error</div>}
        </td>
        <td className="testTd"
            style={{padding: '0px'}}>
            <input
              style={{width:'100%', height: '100%'}}
              name={`product_stock_${i+1}`}
              value={this.stockNameSet(i+1, product)}
              onChange={onChange}
              className=""
              type="number"/>
            {product.errors && <div className="alert alert-danger">error</div>}
        </td>
        <td className="testTd"
            style={{padding: '0px'}}>
            <input
              style={{width:'100%', height: '100%'}}
              name={`product_sku_${i+1}`}
              value={this.skuNameSet(i+1, product)}
              onChange={onChange}
              className=""
              type="text"/>
            {product.errors && <div className="alert alert-danger">error</div>}
        </td>
      </tr>
    );
    }
    return render;
 }
  addProductClassification() {
    // alert('hello addProductClassification');
    this.setState({
      classificationGroup1: this.state.classificationGroup1 + 1
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
            <div className="">
              <h2>属性オプション</h2>
              <div>{this.attributeOptions2()}</div>
            </div>
          }

          <div className="">
            <div className=""><h2>価格と倉庫</h2></div>
            <div className="">
              <div>
                <div>
                  <TextInput
                    name="product_price"
                    label="product price"
                    placeholder="価格を入力してください"
                    value={product.product_price}
                    error={errors.product_price}
                    onChange={onChange}
                    type="number"
                  />
                  <TextInput
                    name="product_stock"
                    label="product_stock"
                    placeholder="在庫数を入力してください"
                    value={product.product_stock}
                    error={errors.product_stock}
                    onChange={onChange}
                    type="number"
                  />


                <div className="form-group">
                  <label htmlFor="test">商品の分類Fieldopen</label>
                  <div className="trigger" style={this.setTriggerStyles()}
                       onClick={this.openProductClassificationField}>
                    <div className="trigger__inner">
                      <span>＋</span>
                    </div>
                  </div>
                </div>

                <div className="ProductClassificationField">
                  <label htmlFor="test">商品の分類1</label>
                  <TextInput
                    name="classificationGroup_name"
                    label="classificationGroup_name"
                    placeholder="分類グループ名を入力してください"
                    value={product.classificationGroup_name}
                    error={errors.classificationGroup_name}
                    onChange={onChange}
                  />
                  <ul className="">
                    <label >商品の分類名</label>
                    {this.renderclassificationGroup1()}
                  </ul>
                  <div className="trigger" style={this.setTriggerStyles()}
                       onClick={this.addProductClassification}>
                    <div className="trigger__inner">
                      <span>＋分類名を追加する</span>
                    </div>
                  </div>
                </div>

                <table className="table">
                  <thead>
                  <tr>
                    <th>{product.classificationGroup_name}</th>
                    <th>価格</th>
                    <th>倉庫</th>
                    <th>SKU分類</th>
                  </tr>
                  </thead>
                  <tbody>
                    {this.renderclassificationRow()}
                  </tbody>
                </table>


                </div>
              </div>
            </div>
          </div>

          <div className="gird_price_and_warehouse">
            <div className="grid_price_and_warehouse"><h2>配送</h2></div>
            <div className="grid_price_and_warehouse_input">
              <div>
                <div>Row</div>
              </div>
            </div>
          </div>

          <div className="gird_price_and_warehouse">
            <div className="grid_price_and_warehouse"><h2>詳細情報</h2></div>
            <div className="grid_price_and_warehouse_input">
              <div>
                <div>Row</div>
              </div>
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


// <td className="testTd">{product.classification_name_1}</td>
// <td className="testTd"
//     style={{padding: '0px'}}>
//     <input
//       style={{width:'100%', height: '100%'}}
//       name="product_price"
//       value={product.product_price}
//       onChange={onChange}
//       className=""
//       type="number"/>
//     {product.errors && <div className="alert alert-danger">error</div>}
// </td>
// <td className="testTd"
//     style={{padding: '0px'}}>
//     <input
//       style={{width:'100%', height: '100%'}}
//       name="product_stock"
//       value={product.product_stock}
//       onChange={onChange}
//       className=""
//       type="number"/>
//     {product.errors && <div className="alert alert-danger">error</div>}
// </td>
// <td>aa</td>


// <td className="testTd">{this.nameSet(i+1, product)}</td>
// <td className="testTd" style={{padding: '0px'}}>
//     <input
//       style={{width:'100%', height: '100%'}}
//       name={`product_price_${i+1}`}
//       value={this.priceNameSet(i+1, product)}
//       onChange={onChange}
//       className=""
//       type="number"/>
//     {product.errors && <div className="alert alert-danger">error</div>}
// </td>
// <td className="testTd"
//     style={{padding: '0px'}}>
//     <input
//       style={{width:'100%', height: '100%'}}
//       name={`product_stock_${i+1}`}
//       value={this.stockNameSet(i+1, product)}
//       onChange={onChange}
//       className=""
//       type="number"/>
//     {product.errors && <div className="alert alert-danger">error</div>}
// </td>
// <td>aa</td>
