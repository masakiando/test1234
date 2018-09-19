import React, {PropTypes} from 'react';

class Quantity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: this.props.quantity};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    console.log(this.props.product.number_of_stocks);
    this.setState(prevState => {
        value: prevState.value >= this.props.product.number_of_stocks ?  this.props.product.number_of_stocks : ++prevState.value;
        // value: ++prevState.value;
    });
  }

  decrement() {
    this.setState(prevState => {
      value: prevState.value > 1? --prevState.value : 1;
    });
  }

  render() {
    return (
      <div className="quantity-input">
      <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>
        <span>-</span>
      </button>
      <input className="quantity-input__screen" type="text" value={this.state.value} readOnly />
      <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>
        <span>+</span>
      </button>
      </div>
    );
  }
}
Quantity.propTypes = {
  product: PropTypes.objectisRequired,
  quantity: PropTypes.number.isRequired
};
export default Quantity;
