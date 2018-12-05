import React, {PropTypes} from 'react';
import HorizontalField       from '../../../commonScreens/recycle/Form/HorizontalField';
import HorizontalFieldLabel  from '../../../commonScreens/recycle/Form/HorizontalFieldLabel';

const DeliveryForm = ({
  product,
  errors,
  onChange,
  openShipmentModal,
  openShipmentModalState
}) => {
  let modalClass = 'modal';
  if (openShipmentModalState) {
    modalClass += " " + 'is-active';
  }
  return (
    <div className="delivery">
      <div>
        <h2 className="title">配送</h2>
      </div>
        <HorizontalField
          controlClass="control has-icons-right"
          label="重量（梱包後)"
        >
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
        </HorizontalField>
        <HorizontalFieldLabel
          controlClass="control has-icons-right center"
          label="パックサイズ(間違ったサイズを入力すると実際の送料が変わります)"
          bottomLabel="R：幅（cm）* D：長さ（cm）* C：高さ（cm ）"
        >
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
        </HorizontalFieldLabel>
        <HorizontalField label="交通費">
          <div className="card has-background-light">
            <div className="card-content" style={{padding: ".5rem"}}>
              <div className="con">
                <strong>John Smith</strong>
                <br/>
                <p>この商品には出荷単位が有効になっていません。買い手はShopeeのお金商品のみを支払うことになります。あなたはここをクリックして、あなたの製品のためのより多くの配送チャネルを開くことができます。</p>
              </div>
              <a onClick={openShipmentModal} className="button is-link is-rounded is-fullwidth">出荷単位の有効化</a>
                <div className={modalClass}>
                  <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title"></p>
                      <a onClick={openShipmentModal}className="delete" aria-label="close"></a>
                    </header>
                    <section className="modal-card-body">
                      変更を<strong>破棄</strong>して出荷設定へ移動しますか？
                    </section>
                    <footer className="modal-card-foot">
                      <a className="button is-success">GO</a>
                      <a onClick={openShipmentModal} className="button">Cancel</a>
                    </footer>
                  </div>
                </div>
            </div>
          </div>
        </HorizontalField>
    </div>
  );
};

DeliveryForm.propTypes = {
  product: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  openShipmentModal: PropTypes.func.isRequired,
  openShipmentModalState: PropTypes.bool.isRequired
  // updateState: PropTypes.func.isRequired,
  // categories: PropTypes.array.isRequired
};

export default DeliveryForm;

// <div className="delivery">
//   <div>
//     <h2 className="title">配送</h2>
//   </div>
//   <HorizontalField
//     controlClass="control has-icons-right"
//     label="重量（梱包後)"
//   >
//     <input
//       className="input"
//       name="product_weight"
//       placeholder="重量を入力してください"
//       value={product.product_weight}
//       error={errors.product_weight}
//       onChange={onChange}
//       type="number"/>
//     <span className="icon is-small is-right">
//       <i className="fas">GR</i>
//     </span>
//   </HorizontalField>
//
//   <HorizontalFieldLabel
//     controlClass="control has-icons-right center"
//     label="パックサイズ(間違ったサイズを入力すると実際の送料が変わります)"
//     bottomLabel="R：幅（cm）* D：長さ（cm）* C：高さ（cm ）"
//   >
//     <input
//       className="input"
//       name="product_packsize_r"
//       placeholder="R"
//       value={product.product_packsize_r}
//       error={errors.product_packsize_r}
//       onChange={onChange}
//       type="number"/>
//     <input
//       className="input"
//       name="product_packsize_d"
//       placeholder="D"
//       value={product.product_packsize_d}
//       error={errors.product_packsize_d}
//       onChange={onChange}
//       type="number"/>
//     <input
//       className="input"
//       name="product_packsize_c"
//       placeholder="C"
//       value={product.product_packsize_c}
//       error={errors.product_packsize_c}
//       onChange={onChange}
//       type="number"/>
//     <span className="icon is-small is-right">
//       <i className="fas">cm</i>
//     </span>
//   </HorizontalFieldLabel>
//
//   <div>
//
//     <HorizontalField label="交通費">
//       <div className="card has-background-light">
//         <div className="card-content" style={{padding: ".5rem"}}>
//           <div className="con">
//             <strong>John Smith</strong>
//             <br/>
//             <p>この商品には出荷単位が有効になっていません。買い手はShopeeのお金商品のみを支払うことになります。あなたはここをクリックして、あなたの製品のためのより多くの配送チャネルを開くことができます。</p>
//           </div>
//           <a onClick={this.openShipmentModal} className="button is-link is-rounded is-fullwidth">出荷単位の有効化</a>
//             <div className={modalClass}>
//               <div className="modal-background"></div>
//               <div className="modal-card">
//                 <header className="modal-card-head">
//                   <p className="modal-card-title"></p>
//                   <a onClick={this.openShipmentModal}className="delete" aria-label="close"></a>
//                 </header>
//                 <section className="modal-card-body">
//                   変更を<strong>破棄</strong>して出荷設定へ移動しますか？
//                 </section>
//                 <footer className="modal-card-foot">
//                   <a className="button is-success">GO</a>
//                   <a onClick={this.openShipmentModal} className="button">Cancel</a>
//                 </footer>
//               </div>
//             </div>
//         </div>
//       </div>
//     </HorizontalField>
//   </div>
// </div>
