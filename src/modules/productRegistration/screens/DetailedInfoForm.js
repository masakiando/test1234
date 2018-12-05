import React, {PropTypes} from 'react';
import HorizontalField       from '../../../commonScreens/recycle/Form/HorizontalField';

const DetailedInfoForm = ({
  product,
  onChange,
  errors,
  preOrderNo,
  preOrderYes,
  preOrder
}) => {
  const PreOrderNo = (
    <p className="help">
      私は2日以内に発送いたします(休日、Tet休日、休業日は含まれません
    </p>
  );

  const PreOrderYes = (
    <div className="center left" >
      <p className="help">私は必要です</p>
      <input
          style={{width: "25%",margin: ".1rem"}}
          className="input"
          name="product_delivery_time"
          placeholder="日数"
          value={product.product_delivery_time}
          error={errors.product_delivery_time}
          onChange={onChange}
          type="number"
        />
      <p className="help">納期(少なくとも7日間)</p>
      </div>
  );
  return (
    <div className="detailedinfo">
      <div>
        <h2 className="title">詳細情報</h2>
      </div>
      <HorizontalField label="予約注文">
        <div className="field has-addons">
          <p className="control">
            <a  onClick={preOrderNo} className="button">
              <span>No</span>
            </a>
          </p>
          <p className="control">
            <a onClick={preOrderYes}className="button">
              <span>Yes</span>
            </a>
          </p>
          <div style={{paddingLeft: ".5rem"}}>
            {preOrder == false ? PreOrderNo : PreOrderYes}
          </div>
        </div>
      </HorizontalField>
      <HorizontalField label="Status">
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
      </HorizontalField>
      <HorizontalField label="SKU products">
        <input
          className="input"
          name="product_sku"
          placeholder="SKU CODE"
          value={product.product_sku}
          error={errors.product_sku}
          onChange={onChange}
          type="text"/>
      </HorizontalField>
    </div>
  );
};

DetailedInfoForm.propTypes = {
  product: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  preOrderNo: PropTypes.func.isRequired,
  preOrderYes: PropTypes.func.isRequired,
  preOrder: PropTypes.bool.isRequired
};

export default DetailedInfoForm;
