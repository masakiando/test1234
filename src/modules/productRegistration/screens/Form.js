import React, {PropTypes}    from 'react';
import styled                from 'styled-components';
import TextInput             from '../../../commonScreens/recycle/Form/Input/TextInput';
import TextInputNoLable      from '../../../commonScreens/recycle/Form/Input/TextInputNoLable';
import Textarea              from '../../../commonScreens/recycle/Form/Textarea/TextArea';
import CategoryDropdown      from '../screens/CategoryDropdown';
import AttributeDropdown     from '../screens/AttributeDropdown';
import LocalViewImageUpload  from '../screens/LocalViewImageUpload';
import CloudinaryImageUpload from '../screens/CloudinaryImageUpload';

class ProdcutForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expanded: false,
      attributeOptions: [],
      attributeOptions2: [],
      attributeOptionsOpen: false,
      preOrder: false,
      classificationGroup1: 1,
      classificationGroup2: 1,
      openShipmentModal: false
    };
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.collapse = this.collapse.bind(this);
    this.updateState = this.updateState.bind(this);
    this.openProductClassificationField = this.openProductClassificationField.bind(this);
    this.openProductClassificationField2 = this.openProductClassificationField2.bind(this);
    this.openShipmentModal = this.openShipmentModal.bind(this);
    this.preOrderYes = this.preOrderYes.bind(this);
    this.preOrderNo = this.preOrderNo.bind(this);
    this.addProductClassification = this.addProductClassification.bind(this);
    this.addProductClassification2 = this.addProductClassification2.bind(this);
    this.renderclassificationRow = this.renderclassificationRow.bind(this);
    this.renderclassificationRowDivTable = this.renderclassificationRowDivTable.bind(this);
  }
  updateState(state) {
    this.setState(state);
    //親コンポーネントを更新
    this.props.updateState(state);
  }

  handleTriggerClick() {
    if (this.state.expanded !== true) {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }

  openProductClassificationField() {
    alert('hello openProductClassificationField');
  }
  openProductClassificationField2() {
    alert('hello openProductClassificationField2');
  }

  openShipmentModal() {
    event.preventDefault();
    // alert('hello openShipmentModal');
    this.setState({
      openShipmentModal: !this.state.openShipmentModal
    });
  }

  preOrderYes(){
    this.setState({ preOrder: true });
  }
  preOrderNo(){
    this.setState({ preOrder: false });
  }


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

  collapse() {
    this.setState({expanded: false});
  }

  setTriggerStyles() {
    return {borderWidth: '1px 1px 1px 1px', borderColor: '#00bfa5', borderStyle: 'dashed'};
  }
  nameSet(i, product) {
    if (i === 1) {
      return product.classification_name_1;
    }
    if (i === 2) {
      return product.classification_name_2;
    }
    if (i === 3) {
      return product.classification_name_3;
    }
    if (i === 4) {
      return product.classification_name_4;
    }
  }
  name2Set(i, product) {
    if (i === 1) {
      return product.classification_name2_1;
    }
    if (i === 2) {
      return product.classification_name2_2;
    }
    if (i === 3) {
      return product.classification_name2_3;
    }
    if (i === 4) {
      return product.classification_name2_4;
    }
  }
  priceNameSet(pi, i, product) {
    if (pi === 1) {
      if (i === 1) {
        return product.product_price_1_1;
      }
      if (i === 2) {
        return product.product_price_1_2;
      }
      if (i === 3) {
        return product.product_price_1_3;
      }
    }
    if (pi === 2) {
      if (i === 1) {
        return product.product_price_2_1;
      }
      if (i === 2) {
        return product.product_price_2_2;
      }
      if (i === 3) {
        return product.product_price_2_3;
      }
    }
    if (pi === 3) {
      if (i === 1) {
        return product.product_price_3_1;
      }
      if (i === 2) {
        return product.product_price_3_2;
      }
      if (i === 3) {
        return product.product_price_3_3;
      }
    }
    if (pi === 4) {
      if (i === 1) {
        return product.product_price_4_1;
      }
      if (i === 2) {
        return product.product_price_4_2;
      }
      if (i === 3) {
        return product.product_price_4_3;
      }
    }
  }
  stockNameSet(pi, i, product) {
    if (pi === 1) {
      if (i === 1) {
        return product.product_stock_1_1;
      }
      if (i === 2) {
        return product.product_stock_1_2;
      }
      if (i === 3) {
        return product.product_stock_1_3;
      }
    }
    if (pi === 2) {
      if (i === 1) {
        return product.product_stock_2_1;
      }
      if (i === 2) {
        return product.product_stock_2_2;
      }
      if (i === 3) {
        return product.product_stock_2_3;
      }
    }
    if (pi === 3) {
      if (i === 1) {
        return product.product_stock_3_1;
      }
      if (i === 2) {
        return product.product_stock_3_2;
      }
      if (i === 3) {
        return product.product_stock_3_3;
      }
    }
    if (pi === 4) {
      if (i === 1) {
        return product.product_stock_4_1;
      }
      if (i === 2) {
        return product.product_stock_4_2;
      }
      if (i === 3) {
        return product.product_stock_4_3;
      }
    }
  }
  skuNameSet(pi, i, product) {
    if (pi === 1) {
      if (i === 1) {
        return product.product_sku_1_1;
      }
      if (i === 2) {
        return product.product_sku_1_2;
      }
      if (i === 3) {
        return product.product_sku_1_3;
      }
    }
    if (pi === 2) {
      if (i === 1) {
        return product.product_sku_2_1;
      }
      if (i === 2) {
        return product.product_sku_2_2;
      }
      if (i === 3) {
        return product.product_sku_2_3;
      }
    }
    if (pi === 3) {
      if (i === 1) {
        return product.product_sku_3_1;
      }
      if (i === 2) {
        return product.product_sku_3_2;
      }
      if (i === 3) {
        return product.product_sku_3_3;
      }
    }
    if (pi === 4) {
      if (i === 1) {
        return product.product_sku_4_1;
      }
      if (i === 2) {
        return product.product_sku_4_2;
      }
      if (i === 3) {
        return product.product_sku_4_3;
      }
    }
  }

  renderclassificationGroup1() {
    const {product, onChange, errors} = this.props;
    const render = [];
    console.log(this.state.classificationGroup1);
    for (let i = 0; i < this.state.classificationGroup1; i++) {
      render.push(<li key={i}>
        <TextInputNoLable
          name={`classification_name_${i + 1}`}
          placeholder="分類名を入力してください"
          value={this.nameSet(i + 1, product)}
          error={errors.classification_name_1}
          onChange={onChange}/>
      </li>);
    }
    return render;
  }
  renderclassificationGroup2() {
    const {product, onChange, errors} = this.props;
    const render = [];
    console.log(this.state.classificationGroup2);
    for (let i = 0; i < this.state.classificationGroup2; i++) {
      render.push(<li key={i}>
        <TextInputNoLable
          name={`classification_name2_${i + 1}`}
          placeholder="分類名を入力してください"
          value={this.name2Set(i + 1, product)}
          error={errors.classification_name2_1}
          onChange={onChange}/>
      </li>);
    }
    return render;
  }
  renderclassificationRow2() {
    const {product, onChange, errors} = this.props;
    const render = [];
    debugger;
    for (var i = 0; i < this.state.classificationGroup2; i++) {
      render.push(<tr>
        <td style={{
            borderWidth: "0px"
          }}>{this.name2Set(i + 1, product)}</td>
      </tr>);
    }
    return render;
  }
  renderclassificationRow_price2(p_i) {
    const {product, onChange, errors} = this.props;
    const render = [];
    debugger;
    for (var i = 0; i < this.state.classificationGroup2; i++) {
      render.push(<div className="is-fullwidth">
        <div className="is-fullwidth" style={{
            borderWidth: '.5px', borderColor: 'grey', borderStyle: 'ridge'
          }}>
          <input
            style={{width: "99%", outline: 0, border:"none", padding: ".7rem"}}
            name={`product_price_${p_i + 1}_${i + 1}`}
            value={this.priceNameSet(p_i + 1, i + 1, product)}
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
    for (var i = 0; i < this.state.classificationGroup2; i++) {
      render.push(<div className="is-fullwidth">
        <div
          className="is-fullwidth"
          style={{ borderWidth: '.5px', borderColor: 'grey', borderStyle: 'ridge'}}
        >
          <input
            style={{width: "99%", outline: 0, border:"none", padding: ".7rem"}}
            name={`product_stock_${p_i + 1}_${i + 1}`}
            value={this.stockNameSet(p_i + 1, i + 1, product)}
            onChange={onChange}
            className="has-text-weight-bold is-size-6"
            type="number"/> {product.errors && <div className="alert alert-danger">error</div>}
        </div>
      </div>);
    }
    return render;
  }
  renderclassificationRow_sku2(p_i) {
    const {product, onChange, errors} = this.props;
    const render = [];
    debugger;
    for (var i = 0; i < this.state.classificationGroup2; i++) {
      render.push(<div className="is-fullwidth">
        <div
          className="is-fullwidth"
          style={{ borderWidth: '.5px', borderColor: 'grey', borderStyle: 'ridge'}}
        >
          <input
            style={{width: "99%", outline: 0, border:"none", padding: ".7rem"}}
            name={`product_sku_${p_i + 1}_${i + 1}`}
            value={this.skuNameSet(p_i + 1, i + 1, product)}
            onChange={onChange}
            className="has-text-weight-bold is-size-6"
            type="text"/> {product.errors && <div className="alert alert-danger">error</div>}
        </div>
      </div>);
    }
    return render;
  }
  renderclassificationRow() {
    const {product, onChange, errors} = this.props;
    const render = [];
    debugger;
    for (var i = 0; i < this.state.classificationGroup1; i++) {
      render.push(<tr>
        <td className="testTd">
          {this.nameSet(i + 1, product)}
        </td>
        <td className="testTd">
          {this.renderclassificationRow2()}
        </td>
        <td className="is-fullwidth">
          {this.renderclassificationRow_price2(i)}
        </td>
        <td className="is-fullwidth">
          {this.renderclassificationRow_stock2(i)}
        </td>
        <td className="testTd">
          {this.renderclassificationRow_sku2(i)}
        </td>
      </tr>);
    }
    return render;
  }

  renderclassificationRowDivTable() {
    const {product, onChange, errors} = this.props;
    const render = [];
    debugger;
    for (var i = 0; i < this.state.classificationGroup1; i++) {
      render.push(<div className="mprsf_mprsf_divTableRow ">
        <div className="mprsf_divTableCell">
          {this.nameSet(i + 1, product)}
        </div>
        <div className="mprsf_divTableCell">
          {this.renderclassificationRow2()}
        </div>
        <div className="mprsf_divTableCell is-fullwidth"style={{padding: "0px"}}>
          {this.renderclassificationRow_price2(i)}
        </div>
        <div className="mprsf_divTableCell is-fullwidth"style={{padding: "0px"}}>
          {this.renderclassificationRow_stock2(i)}
        </div>
        <div className="mprsf_divTableCell">
          {this.renderclassificationRow_sku2(i)}
        </div>
      </div>);
    }
    return render;
  }
  addProductClassification() {
    // alert('hello addProductClassification');
    this.setState({
      classificationGroup1: this.state.classificationGroup1 + 1
    });
  }
  addProductClassification2() {
    // alert('hello addProductClassification');
    this.setState({
      classificationGroup2: this.state.classificationGroup2 + 1
    });
  }

  render() {
        const {product, errors, onChange, categories} = this.props;
    let modalClass = 'modal';
    if (this.state.openShipmentModal) {
      modalClass += " " + 'is-active';
    }
    const preOrderNo = (
      <p className="help">
        私は2日以内に発送いたします(休日、Tet休日、休業日は含まれません
      </p>
    );

    const preOrderYes = (
      <div className="center left" >
        <p className="help">私は必要です</p>
        <input
            style={{width: "25%",margin: ".1rem"}}
            className="input"
            name="product_packsize_r"
            placeholder="R"
            value={product.product_packsize_r}
            error={errors.product_packsize_r}
            onChange={onChange}
            type="number"
          />
        <p className="help">納期(少なくとも7日間)</p>
        </div>
    );

    return (<section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth has-background-white">
            <form>
              <div className="">
                <div>
                  <h2 className="title">製品画像</h2>
                </div>
                <div className="field is-horizontal">
                  <label className="field-label is-normal" htmlFor="main">
                    <label className="label">main imege</label>
                  </label>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <LocalViewImageUpload product={product} updateState={this.updateState}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <label className="field-label is-normal" htmlFor="main">
                    <label className="label">main imege</label>
                  </label>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <CloudinaryImageUpload product={product} updateState={this.updateState}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="basicinfo ">
                <div className="basicinfo__title">
                  <h2 className="title">基本情報</h2>
                </div>
                <div className="basicinfo__input">
                  <div>
                    <TextInput
                      name="product_name"
                      label="product name"
                      placeholder="商品名を入
                      力してください"
                      value={product.product_name}
                      error={errors.product_name}
                      onChange={onChange}/>
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
                      onBlur={this.collapse}/>
                  </div>
                  <div>
                    <CategoryDropdown
                      categories={categories}
                      product={product}
                      updateState={this.updateState}/>
                  </div>
                </div>
              </div>
              {
                this.state.attributeOptionsOpen && <div className="">
                    <div className="">
                      <h2 className="title">属性オプション</h2>
                    </div>
                    <div>{this.attributeOptions2()}</div>
                  </div>
              }

              <div className="">
                <div>
                  <h2 className="title">価格と倉庫</h2>
                </div>
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
                        type="number"/>
                      <TextInput
                        name="product_stock"
                        label="product stock"
                        placeholder="在庫数を入力してください"
                        value={product.product_stock}
                        error={errors.product_stock}
                        onChange={onChange}
                        type="number"/>

                      <div className="field is-horizontal" style={{margin: '0rem 2rem 1.5rem 2rem'}}>
                        <label className="field-label is-normal" htmlFor="Classification of goods">
                          <label className="label">Classification of goods</label>
                        </label>
                        <div className="field-body">
                          <div className="field">
                            <p className="control">
                              <a onClick={this.openProductClassificationField}
                                 className="button is-success is-rounded is-fullwidth" >
                                 + Additional classification of goods
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>


                      <div className="ProductClassificationField1">
                        <label className="subtitle has-text-weight-bold" htmlFor="test">分類1</label>
                        <TextInput
                          name="classificationGroup_name"
                          label="classification Group name"
                          placeholder="分類グループ名を入力してください"
                          value={product.classificationGroup_name}
                          error={errors.classificationGroup_name}
                          onChange={onChange}/>

                        <div className="field is-horizontal">
                          <label className="field-label is-normal" htmlFor="分類名">
                            <label className="label">分類名</label>
                          </label>
                          <div className="field-body">
                            <div className="field">
                              <p className="control is-marginless">
                                <ul className="is-marginless">
                                  {this.renderclassificationGroup1()}
                                </ul>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="field is-horizontal" style={{margin: '0rem 2rem 1.5rem 2rem'}}>
                          <label className="field-label is-normal" htmlFor="分類名を追加">
                            <label className="label">分類名追加</label>
                          </label>
                          <div className="field-body">
                            <div className="field">
                              <div className="control">
                                <a onClick={this.addProductClassification}
                                   className="button is-success is-rounded is-fullwidth" >
                                   ＋分類名を追加する
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ProductClassificationField2" >
                        <label className="subtitle has-text-weight-bold"htmlFor="test">分類2</label>
                        <TextInput


                          name="classificationGroup_name2"


                          label="classification Group name2"


                          placeholder="分類グループ名2を入力してください"


                          value={product.classificationGroup_name2}


                          error={errors.classificationGroup_name2}


                          onChange={onChange}/>
                          <div className="field is-horizontal">
                            <label className="field-label is-normal" htmlFor="分類名">
                              <label className="label">分類名</label>
                            </label>
                            <div className="field-body">
                              <div className="field">
                                <p className="control is-marginless">
                                  <ul className="is-marginless">
                                    {this.renderclassificationGroup2()}
                                  </ul>
                                </p>
                              </div>
                            </div>
                          </div>
                        <div className="field is-horizontal" style={{margin: '0rem 2rem 1.5rem 2rem'}}>
                          <label className="field-label is-normal" htmlFor="分類名を追加">
                            <label className="label">分類名追加</label>
                          </label>
                          <div className="field-body">
                            <div className="field">
                              <div className="control">
                                <a onClick={this.addProductClassification2}
                                   className="button is-success is-rounded is-fullwidth" >
                                   ＋分類名を追加する
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>

                      <div className="form-group">
                        <label htmlFor="test">商品の分類2</label>
                        <div className="trigger" style={this.setTriggerStyles()} onClick={this.openProductClassificationField2}>
                          <div className="trigger__inner">
                            <span>＋ ADD 分類2</span>
                          </div>
                        </div>
                      </div>
                      <div className="field is-horizontal" style={{margin: '0rem 2rem 1.5rem 2rem'}}>
                        <label className="field-label is-normal" htmlFor="Classification of goods">
                          <label className="label">Classification of goods</label>
                        </label>
                        <div className="field-body">
                          <div className="field">
                            <p className="control">
                              <a onClick={this.openProductClassificationField}
                                 className="button is-success is-rounded is-fullwidth" >
                                 + Additional classification of goods
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mprsf_divTable">
                        <div className="mprsf_divTableHeading">
                          <div className="mprsf_divTableRow has-text-weight-bold has-text-centered has-text-white has-background-grey">
                            <div className="mprsf_divTableHead">&nbsp; {product.classificationGroup_name} </div>
                            <div className="mprsf_divTableHead">&nbsp; {product.classificationGroup_name2} </div>
                            <div className="mprsf_divTableHead"> &nbsp;価格 </div>
                            <div className="mprsf_divTableHead"> &nbsp;倉庫 </div>
                            <div className="mprsf_divTableHead"> &nbsp;SKU分類 </div>
                          </div>
                        </div>
                        <div className="mprsf_divTableBody">

                          {this.renderclassificationRowDivTable()}

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div>
                  <h2 className="title">配送</h2>
                </div>
                <div className="field is-horizontal">
                  <label className="field-label is-normal" htmlFor="重量（梱包後)">
                    <label className="label">重量（梱包後)</label>
                  </label>
                  <div className="field-body">
                    <div className="field">
                      <div className="control has-icons-right">
                        <input

                          className="input"

                          name="product_weight"

                          placeholder="重量を入力してください"

                          value={product.product_weight}

                          error={errors.product_weight}

                          onChange={onChange}

                          type="number"/>
                        <span className="icon is-small is-right">
                          <i className="fas">GR</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">パックサイズ（間違ったサイズを入力すると実際の送料が変わります）</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control has-icons-right center">
                        <input
                          className="input"
                          name="product_packsize_r"
                          placeholder="R"
                          value={product.product_packsize_r}
                          error={errors.product_packsize_r}
                          onChange={onChange}
                          type="number"/>
                        <input
                          className="input"
                          name="product_packsize_d"
                          placeholder="D"
                          value={product.product_packsize_d}
                          error={errors.product_packsize_d}
                          onChange={onChange}
                          type="number"/>
                        <input
                          className="input"
                          name="product_packsize_c"
                          placeholder="C"
                          value={product.product_packsize_c}
                          error={errors.product_packsize_c}
                          onChange={onChange}
                          type="number"/>
                        <span className="icon is-small is-right">
                          <i className="fas">cm</i>
                        </span>
                      </div>
                      <p className="help is-danger">
                        R：幅（cm）* D：長さ（cm）* C：高さ（cm ）
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="field is-horizontal">
                    <label className="field-label is-normal" htmlFor="交通費">
                      <label className="label">交通費</label>
                    </label>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <div className="card has-background-light">
                            <div className="card-content" style={{padding: ".5rem"}}>
                              <div className="con">
                                <strong>John Smith</strong>
                                <br/>
                                <p>この商品には出荷単位が有効になっていません。買い手はShopeeのお金商品のみを支払うことになります。あなたはここをクリックして、あなたの製品のためのより多くの配送チャネルを開くことができます。</p>
                              </div>
                              <a onClick={this.openShipmentModal} className="button is-link is-rounded is-fullwidth">出荷単位の有効化</a>
                                <div className={modalClass}>
                                  <div className="modal-background"></div>
                                  <div className="modal-card">
                                    <header className="modal-card-head">
                                      <p className="modal-card-title"></p>
                                      <a onClick={this.openShipmentModal}className="delete" aria-label="close"></a>
                                    </header>
                                    <section className="modal-card-body">
                                      変更を<strong>破棄</strong>して出荷設定へ移動しますか？
                                    </section>
                                    <footer className="modal-card-foot">
                                      <a className="button is-success">GO</a>
                                      <a onClick={this.openShipmentModal} className="button">Cancel</a>
                                    </footer>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div>
                  <h2 className="title">詳細情報</h2>
                </div>
                <div className="field is-horizontal">
                  <label className="field-label is-normal" htmlFor="予約注文">
                    <label className="label">予約注文</label>
                  </label>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <div className="field has-addons">
                          <p className="control">
                            <a  onClick={this.preOrderNo} className="button">
                              <span>No</span>
                            </a>
                          </p>
                          <p className="control">
                            <a onClick={this.preOrderYes}className="button">
                              <span>Yes</span>
                            </a>
                          </p>
                          <div style={{paddingLeft: ".5rem"}}>
                            {this.state.preOrder == false ? preOrderNo : preOrderYes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <label className="field-label is-normal" htmlFor="Status">
                    <label className="label">Status</label>
                  </label>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <div className="dropdown is-hoverable">
                          <div className="dropdown-trigger">
                            <div className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                              <span>{product.product_statue}</span>
                              <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                            </div>
                          </div>
                          <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a className="dropdown-item" name="product_statue" value="New" onClick={onChange}>
                                New
                              </a>
                              <a className="dropdown-item" name="product_statue" value="Used" onClick={onChange}>
                                Used
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <label className="field-label is-normal" htmlFor="SKU products">
                    <label className="label">SKU products</label>
                  </label>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          name="product_sku"
                          placeholder=""
                          value={product.product_sku}
                          error={errors.product_sku}
                          onChange={onChange}
                          type="text"/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>);
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
