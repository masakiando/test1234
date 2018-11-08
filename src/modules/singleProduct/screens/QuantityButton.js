import React, {PropTypes} from 'react';

class QuantityButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderQuantity: this.props.quantity
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    console.log(this.props.product.produc_quantity);
    this.setState(
      {
        orderQuantity: this.state.orderQuantity >= this.props.product.produc_quantity ?
        this.props.product.produc_quantity : ++this.state.orderQuantity
    });
  }

  decrement() {
    this.setState({
      orderQuantity: this.state.orderQuantity > 1? --this.state.orderQuantity : 1
    });
  }

  render() {
    return (
      <div className="quantity-input">
      <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>
        <span>-</span>
      </button>
      <input className="quantity-input__screen" type="text" value={this.state.orderQuantity} readOnly />
      <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>
        <span>+</span>
      </button>
      </div>
    );
  }
}
QuantityButton.propTypes = {
  product: PropTypes.objectisRequired,
  quantity: PropTypes.number.isRequired
};

export default QuantityButton;
