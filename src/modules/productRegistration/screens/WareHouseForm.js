import React, {PropTypes} from 'react';
import TextInput             from '../../../commonScreens/recycle/Form/Input/TextInput';
import HorizontalField       from '../../../commonScreens/recycle/Form/HorizontalField';

const WareHouseForm = ({
  product,
  errors,
  onChange,
  openProductClassificationField
}) => {
  return (
    <div className="warehouse">
      <div>
        <h2 className="title">価格と倉庫</h2>
      </div>
      <HorizontalField
        style={{margin: '0rem 2rem 1.5rem 2rem'}}>
        <a onClick={openProductClassificationField}
           className="button is-success is-rounded is-fullwidth" >
           + 1つ目の分類を設定する
        </a>
      </HorizontalField>
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
        label="product stock"
        placeholder="在庫数を入力してください"
        value={product.product_stock}
        error={errors.product_stock}
        onChange={onChange}
        type="number"
      />
    </div>
  );
};

WareHouseForm.propTypes = {
  product: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  openProductClassificationField: PropTypes.func.isRequired
  // updateState: PropTypes.func.isRequired,
  // categories: PropTypes.array.isRequired
};

export default WareHouseForm;

// <div>
//   <div>
//     <div className="ProductClassificationField1">
//       <label className="subtitle has-text-weight-bold" htmlFor="test">分類1</label>
//       <TextInput
//         name="classificationGroup_name"
//         label="classification Group name"
//         placeholder="分類グループ名を入力してください"
//         value={product.classificationGroup_name}
//         error={errors.classificationGroup_name}
//         onChange={onChange}/>
//
//       <HorizontalField label="分類名">
//         <ul className="is-marginless">
//           {this.state.classifications.map((classification, idx) => (
//             <div className="classification center">
//               <input
//                 className="input"
//                 name="classification1"
//                 type="text"
//                 placeholder={`分類名を入力してください #${idx + 1} `}
//                 value={classification.name}
//                 onChange={this.handleClassificationNameChange(idx)}
//               />
//               <button type="button"
//                 onClick={this.handleRemoveClassification(idx)}
//                 name="classification1">
//                 -
//               </button>
//             </div>
//           ))}
//         </ul>
//       </HorizontalField>
//     </div>
//
//     <HorizontalField
//       label="分類名追加"
//       style={{margin: '0rem 2rem 1.5rem 2rem'}}>
//       <a onClick={this.handleAddClassification}
//          name="classification1"
//          className="button is-success is-rounded is-fullwidth" >
//          ＋分類名を追加する 1
//       </a>
//     </HorizontalField>
//
//     <div className="ProductClassificationField2" >
//       <label className="subtitle has-text-weight-bold"htmlFor="test">分類2</label>
//       <TextInput
//         name="classificationGroup_name2"
//         label="classification Group name2"
//         placeholder="分類グループ名2を入力してください"
//         value={product.classificationGroup_name2}
//         error={errors.classificationGroup_name2}
//         onChange={onChange}/>
//
//         <HorizontalField label="分類名">
//           <ul className="is-marginless">
//             {this.state.classifications2.map((classification, idx) => (
//               <div className="classification center">
//                 <input
//                   className="input"
//                   name="classification2"
//                   type="text"
//                   placeholder={`分類名を入力してください #${idx + 1} `}
//                   value={classification.name}
//                   onChange={this.handleClassificationNameChange(idx)}
//                 />
//                 <button
//                   type="button"
//                   onClick={this.handleRemoveClassification(idx)}
//                   name="classification2">-</button>
//               </div>
//             ))}
//           </ul>
//         </HorizontalField>
//
//         <HorizontalField
//           label="分類名追加"
//           style={{margin: '0rem 2rem 1.5rem 2rem'}}>
//           <a onClick={this.handleAddClassification}
//              name="classification2"
//              className="button is-success is-rounded is-fullwidth" >
//              ＋分類名を追加する 2
//           </a>
//         </HorizontalField>
//     </div>
//
//     <div className="divTable">
//       <div className="divTableHeading">
//         <div className="divTableRow has-text-weight-bold has-text-centered has-text-white has-background-grey">
//           <div className="divTableHead">&nbsp; {product.classificationGroup_name} </div>
//           <div className="divTableHead">&nbsp; {product.classificationGroup_name2} </div>
//           <div className="divTableHead"> &nbsp;価格 </div>
//           <div className="divTableHead"> &nbsp;倉庫 </div>
//           <div className="divTableHead"> &nbsp;SKU分類 </div>
//         </div>
//       </div>
//       <div className="divTableBody">
//         {this.renderclassificationRowDivTable()}
//       </div>
//     </div>
//   </div>
// </div>
