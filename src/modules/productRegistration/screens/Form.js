import React, {PropTypes}    from 'react';
import TextInput             from '../../../commonScreens/recycle/Form/Input/TextInput';
import TextInputNoLable      from '../../../commonScreens/recycle/Form/Input/TextInputNoLable';
import Textarea              from '../../../commonScreens/recycle/Form/Textarea/TextArea';
import HorizontalField       from '../../../commonScreens/recycle/Form/HorizontalField';
import HorizontalFieldLabel  from '../../../commonScreens/recycle/Form/HorizontalFieldLabel';
import CategoryDropdown      from '../screens/CategoryDropdown';
import AttributeDropdown     from '../screens/AttributeDropdown';
import LocalViewImageUpload  from '../screens/LocalViewImageUpload';
import CloudinaryImageUpload from '../screens/CloudinaryImageUpload';
import ProductImageForm      from '../screens/ProductImageForm';
import BasicinfoForm         from '../screens/BasicinfoForm';
import WareHouseForm         from '../screens/WareHouseForm';
import DeliveryForm          from '../screens/DeliveryForm';
import DetailedInfoForm      from '../screens/DetailedInfoForm';
import {
  priceNameSet, stockNameSet, skuNameSet } from '../screens/NameSet';

class ProdcutForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expanded: false,
      attributeOptions: [],
      attributeOptions2: [],
      attributeOptionsOpen: false,
      preOrder: false,
      classificationGroup2: 1,
      openShipmentModal: false,
      classifications: [ { name: " " } ],
      classifications2: [ { name: " " } ]
    };
    this.collapse = this.collapse.bind(this);
    this.updateState = this.updateState.bind(this);
    this.openProductClassificationField = this.openProductClassificationField.bind(this);
    this.openProductClassificationField2 = this.openProductClassificationField2.bind(this);
    this.openShipmentModal = this.openShipmentModal.bind(this);
    this.preOrderYes = this.preOrderYes.bind(this);
    this.preOrderNo = this.preOrderNo.bind(this);
    this.addProductClassification2 = this.addProductClassification2.bind(this);
    this.renderclassificationRow = this.renderclassificationRow.bind(this);
    this.renderclassificationRowDivTable = this.renderclassificationRowDivTable.bind(this);
  }
  updateState(state) {
    this.setState(state);
    this.props.updateState(state);//親コンポーネントを更新
  }

  openProductClassificationField() { alert('hello openProductClassificationField'); }

  openProductClassificationField2() { alert('hello openProductClassificationField2'); }

  openShipmentModal() {
    event.preventDefault();
    this.setState({
      openShipmentModal: !this.state.openShipmentModal
    });
  }

  preOrderYes(){ this.setState({ preOrder: true });}

  preOrderNo(){ this.setState({ preOrder: false }); }

  attributeOptions2() {
    return this.state.attributeOptions.map((item, index) => {
      return (<AttributeDropdown
        className={`gird_dropdown_${index + 1}`}
        key={item.attribute_key_id}
        name={item.attribute_key_name}
        label={item.attribute_key_name}
        categories={this.props.categories}
        options={this.state.attributeOptions2}
        product={this.props.product}
        updateState={this.updateState}/>);
    });
  }

  collapse() { this.setState({expanded: false}); }

  setTriggerStyles() {
    return {borderWidth: '1px 1px 1px 1px', borderColor: '#00bfa5', borderStyle: 'dashed'};
  }

  handleClassificationNameChange = (idx) => (evt) => {
    if(evt.target.name === 'classification1') {
      const newShareholders = this.state.classifications.map((classification, sidx) => {
        if (idx !== sidx) return classification;
        return { ...classification, name: evt.target.value };
      });
      this.setState({ classifications: newShareholders });
    }
    if(evt.target.name === 'classification2') {
      const newShareholders = this.state.classifications2.map((classification, sidx) => {
        if (idx !== sidx) return classification;
        return { ...classification, name: evt.target.value };
      });
      this.setState({ classifications2: newShareholders });
    }
  }

  handleRemoveClassification = (idx) => (evt) => {
    if(evt.target.name === 'classification1') {
      this.setState({ classifications: this.state.classifications.filter((s, sidx) => idx !== sidx) });
    }
    if(evt.target.name === 'classification2') {
      this.setState({ classifications2: this.state.classifications2.filter((s, sidx) => idx !== sidx) });
    }
  }

  handleAddClassification = (evt) => {
    if(evt.target.name === 'classification1') {
      this.setState({ classifications: this.state.classifications.concat([{ name: '' }]) });
    }
    if(evt.target.name === 'classification2') {
      this.setState({ classifications2: this.state.classifications2.concat([{ name: '' }]) });
    }
  }

  renderclassificationRow2() {
    const {product, onChange, errors} = this.props;
    const render = [];
    for (var i = 0; i < this.state.classifications2.length; i++) {
      render.push(<tr>
        <td style={{ borderWidth: "0px" }}>{this.state.classifications2[i].name}</td>
      </tr>);
    }
    return render;
  }

  renderclassificationRow_price2(p_i) {
    const {product, onChange, errors} = this.props;
    const render = [];
    for (var i = 0; i < this.state.classifications2.length; i++) {
      render.push(<div className="is-fullwidth">
        <div className="is-fullwidth" style={{
            borderWidth: '.5px', borderColor: 'grey', borderStyle: 'ridge'
          }}>
          <input
            style={{width: "99%", outline: 0, border:"none", padding: ".7rem"}}
            name={`product_price_${p_i + 1}_${i + 1}`}
            value={priceNameSet(p_i + 1, i + 1, product)}
            onChange={onChange}
            className="has-text-weight-bold is-size-6"
            type="number"/> {product.errors && <div className="alert alert-danger">error</div>}
        </div>
      </div>);
    }
    return render;
  }

  renderclassificationRow_stock2(p_i) {
    const {product, onChange, errors} = this.props;
    const render = [];
    debugger;
    for (var i = 0; i < this.state.classifications2.length; i++) {
      render.push(<div className="is-fullwidth">
        <div
          className="is-fullwidth"
          style={{ borderWidth: '.5px', borderColor: 'grey', borderStyle: 'ridge'}}
        >
          <input
            style={{width: "99%", outline: 0, border:"none", padding: ".7rem"}}
            name={`product_stock_${p_i + 1}_${i + 1}`}
            value={stockNameSet(p_i + 1, i + 1, product)}
            onChange={onChange}
            className="has-text-weight-bold is-size-6"
            type="number"/> {product.errors && <div className="alert alert-danger">error</div>}
        </div>
      </div>);
    }
    return render;
  }

  renderclassificationRow_sku2(p_i) {
    const {product, onChange, errors} = this.props; const render = [];
    for (var i = 0; i < this.state.classifications2.length; i++) {
      render.push(<div className="is-fullwidth">
        <div
          className="is-fullwidth"
          style={{ borderWidth: '.5px', borderColor: 'grey', borderStyle: 'ridge'}}
        >
          <input
            style={{width: "99%", outline: 0, border:"none", padding: ".7rem"}}
            name={`product_sku_${p_i + 1}_${i + 1}`}
            value={skuNameSet(p_i + 1, i + 1, product)}
            onChange={onChange}
            className="has-text-weight-bold is-size-6"
            type="text"/> {product.errors && <div className="alert alert-danger">error</div>}
        </div>
      </div>);
    }
    return render;
  }
  renderclassificationRow() {
    const {product, onChange, errors} = this.props; const render = [];
    for (var i = 0; i < this.state.classifications.length; i++) {
      render.push(<tr>
        <td className="testTd"> {this.state.classifications[i].name} </td>
        <td className="testTd"> {this.renderclassificationRow2()} </td>
        <td className="is-fullwidth"> {this.renderclassificationRow_price2(i)} </td>
        <td className="is-fullwidth"> {this.renderclassificationRow_stock2(i)} </td>
        <td className="testTd"> {this.renderclassificationRow_sku2(i)} </td>
      </tr>);
    }
    return render;
  }

  renderclassificationRowDivTable() {
    const {product, onChange, errors} = this.props;
    const render = [];
    debugger;
    for (var i = 0; i < this.state.classifications.length; i++) {
      render.push(<div className="divTableRow ">
        <div className="divTableCell"> {this.state.classifications[i].name} </div>
        <div className="divTableCell"> {this.renderclassificationRow2()} </div>
        <div className="divTableCell is-fullwidth"style={{padding: "0px"}}>
          {this.renderclassificationRow_price2(i)}
        </div>
        <div className="divTableCell is-fullwidth"style={{padding: "0px"}}>
          {this.renderclassificationRow_stock2(i)}
        </div>
        <div className="divTableCell"> {this.renderclassificationRow_sku2(i)} </div>
      </div>);
    }
    return render;
  }

  addProductClassification2() {
    // alert('hello addProductClassification');
    this.setState({
      classificationGroup2: this.state.classificationGroup2 + 1
    });
  }

  render() {
    const {product, errors, onChange, categories} = this.props;
    return (
      <section className="section">
       <div className="container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth has-background-white">
            <form>
              <ProductImageForm
                product={product}
                updateState={this.updateState}
              />
              <BasicinfoForm
                product={product}
                errors={errors}
                onChange={onChange}
                categories={categories}
                updateState={this.updateState}
                attributeOptionsOpen={this.state.attributeOptionsOpen}
              />
              {
                this.state.attributeOptionsOpen && <div className="">
                    <div className="">
                      <h2 className="title">属性オプション</h2>
                    </div>
                    <div>{this.attributeOptions2()}</div>
                  </div>
              }
              <WareHouseForm
                product={product}
                errors={errors}
                onChange={onChange}
                openProductClassificationField={this.openProductClassificationField}
              />
                  <div>
                    <div>
                      <div className="ProductClassificationField1">
                        <label className="subtitle has-text-weight-bold" htmlFor="test">分類1</label>
                        <TextInput
                          name="classificationGroup_name"
                          label="classification Group name"
                          placeholder="分類グループ名を入力してください"
                          value={product.classificationGroup_name}
                          error={errors.classificationGroup_name}
                          onChange={onChange}/>

                        <HorizontalField label="分類名">
                          <ul className="is-marginless">
                            {this.state.classifications.map((classification, idx) => (
                              <div className="classification center">
                                <input
                                  className="input"
                                  name="classification1"
                                  type="text"
                                  placeholder={`分類名を入力してください #${idx + 1} `}
                                  value={classification.name}
                                  onChange={this.handleClassificationNameChange(idx)}
                                />
                                <button type="button"
                                  onClick={this.handleRemoveClassification(idx)}
                                  name="classification1">
                                  -
                                </button>
                              </div>
                            ))}
                          </ul>
                        </HorizontalField>
                      </div>

                      <HorizontalField
                        label="分類名追加"
                        style={{margin: '0rem 2rem 1.5rem 2rem'}}>
                        <a onClick={this.handleAddClassification}
                           name="classification1"
                           className="button is-success is-rounded is-fullwidth" >
                           ＋分類名を追加する 1
                        </a>
                      </HorizontalField>

                      <div className="ProductClassificationField2" >
                        <label className="subtitle has-text-weight-bold"htmlFor="test">分類2</label>
                        <TextInput
                          name="classificationGroup_name2"
                          label="classification Group name2"
                          placeholder="分類グループ名2を入力してください"
                          value={product.classificationGroup_name2}
                          error={errors.classificationGroup_name2}
                          onChange={onChange}/>

                          <HorizontalField label="分類名">
                            <ul className="is-marginless">
                              {this.state.classifications2.map((classification, idx) => (
                                <div className="classification center">
                                  <input
                                    className="input"
                                    name="classification2"
                                    type="text"
                                    placeholder={`分類名を入力してください #${idx + 1} `}
                                    value={classification.name}
                                    onChange={this.handleClassificationNameChange(idx)}
                                  />
                                  <button
                                    type="button"
                                    onClick={this.handleRemoveClassification(idx)}
                                    name="classification2">-</button>
                                </div>
                              ))}
                            </ul>
                          </HorizontalField>

                          <HorizontalField
                            label="分類名追加"
                            style={{margin: '0rem 2rem 1.5rem 2rem'}}>
                            <a onClick={this.handleAddClassification}
                               name="classification2"
                               className="button is-success is-rounded is-fullwidth" >
                               ＋分類名を追加する 2
                            </a>
                          </HorizontalField>
                      </div>

                      <div className="divTable">
                        <div className="divTableHeading">
                          <div className="divTableRow has-text-weight-bold has-text-centered has-text-white has-background-grey">
                            <div className="divTableHead">&nbsp; {product.classificationGroup_name} </div>
                            <div className="divTableHead">&nbsp; {product.classificationGroup_name2} </div>
                            <div className="divTableHead"> &nbsp;価格 </div>
                            <div className="divTableHead"> &nbsp;倉庫 </div>
                            <div className="divTableHead"> &nbsp;SKU分類 </div>
                          </div>
                        </div>
                        <div className="divTableBody">
                          {this.renderclassificationRowDivTable()}
                        </div>
                      </div>
                    </div>
                  </div>

              <DeliveryForm
                product={product}
                errors={errors}
                onChange={onChange}
                openShipmentModal={this.openShipmentModal}
                openShipmentModalState={this.state.openShipmentModal}
              />

              <DetailedInfoForm
                product={product}
                errors={errors}
                onChange={onChange}
                preOrderNo={this.preOrderNo}
                preOrderYes={this.preOrderYes}
                preOrder={this.state.preOrder}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
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
