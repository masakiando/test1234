import React from "react";

class IncorporationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      classifications: [
        { name: '' }
      ]
    };
  }

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }

  handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = this.state.classifications.map((classification, sidx) => {
      if (idx !== sidx) return classification;
      return { ...classification, name: evt.target.value };
    });

    this.setState({ classifications: newShareholders });
  }

  handleSubmit = (evt) => {
    const { name, classifications } = this.state;
    alert(`Incorporated: ${name} with ${classifications.length} classifications`);
  }

  handleAddShareholder = () => {
    this.setState({ classifications: this.state.classifications.concat([{ name: '' }]) });
  }

  handleRemoveShareholder = (idx) => () => {
    this.setState({ classifications: this.state.classifications.filter((s, sidx) => idx !== sidx) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.classifications.map((classification, idx) => (
          <div className="classification">
            <input
              type="text"
              placeholder={`Shareholder #${idx + 1} name`}
              value={classification.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddShareholder} className="small">Add Shareholder</button>
        <button>Incorporate</button>
      </form>
    )
  }
}

export default IncorporationForm
