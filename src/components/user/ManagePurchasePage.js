import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';
import ImageAvatar from './ImageAvatar';


class ManagePurchasePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="container clearfix">
       <div className="user_container_1">
         <div className="user_container_1_Upper">
           <div className="clearfix">
             <ImageAvatar/>
           </div>
           <div className="clearfix">
             Masaki andko
           </div>
         </div>
         <div className="user_container_1_Lower">
           <Navigation className="" components={this.props.listNames} />
         </div>
       </div>
       <div className="user_container_2">
         <div className="Upper">
           <Navigation className="evenly_side_by_side" components={this.props.navNames} />
         </div>
         <div className="Lower">
           <Navigation className="evenly_side_by_side" components={this.props.navNames} />
         </div>
       </div>
     </div>
    );
  }
}
ManagePurchasePage.defaultProps = {
  navNames: ["支払いを待っている", "商品を待つ", "届いた", "割り当て済み", "キャンセルされた"],
  listNames: ["My Account", "Purchase Order", "Notification", "Discount Code", "Shopee Xu"]
};

ManagePurchasePage.propTypes = {
  navNames: PropTypes.array.isRequired,
  listNames: PropTypes.array.isRequired
};
export default ManagePurchasePage;
