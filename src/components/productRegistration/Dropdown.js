import React, {PropTypes} from 'react';
import axios from 'axios';

class attributeValueDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			value1: '選択してください',
      active: 0,
      categoryList1_id: 0
		};

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.collapse = this.collapse.bind(this);
	}

	collapse() {
		// this.setState({
    //   expanded: false
    // });
	}

	handleItemClick(event) {
    event.preventDefault();
    let text = event.target.innerText;
    let itemIndex = event.target.value;
    let tableId = parseInt(event.target.id, 10);
    const newState = {
      value1: text,
      active: itemIndex,
      categoryList1_id: tableId,
			expanded: false
		};
		this.setState(newState);
	}

  isActive(value){
    if(this.state.active === value){
        return 'active';
    }
  }

	handleTriggerClick() {
    this.setState({
      expanded: !this.state.expanded
    });
	}

  itemList(label) {
    return this.props.options.map( (item, index) => {
      if( label === item.attribute_key_name ) {
        return (
          <div
            key={index}
            onClick={this.handleItemClick}
            className={this.isActive(index+1) + ' item'}
            value={index+1}
            id={item.id}>
            {item.attribute_value_name}
          </div>
        );
      }
    });
  }

  setTriggerStyles(){
    if(this.state.expanded) {
      return {
        borderWidth: '1px 1px 0px 1px',
        borderColor: '#00bfa5',
        borderStyle: 'solid'
      };
    } else {
      return {border: '1px solid #ff5722'};
    }
  }

  setContentsStyles(){
    if(this.state.expanded) {
      return {
        borderWidth: '0px 1px 1px 1px',
        borderColor: '#00bfa5',
        borderStyle: 'solid'
      };
    } else {
      return {border: '0px solid #ff5722'};
    }
  }

	render() {
    const { expanded } = this.state;
    const { label, className } = this.props;
		return (
			<div
        className={`${className} dropdown ${expanded ? 'active' : ''}`} tabIndex="0" onBlur={this.collapse}>
        <label className="gird_dropdown_1A" htmlFor="test">{label}</label>
        <div className="ggird_dropdown_1B">
          <div className="trigger" style={this.setTriggerStyles()} onClick={this.handleTriggerClick}>
            <div className="trigger__inner">
              <span >{this.state.value1}</span>
            </div>
          </div>
          <div className="contents" style={this.setContentsStyles()}>
            {expanded && <div className="content">
              <div className="dropdown__boundary"><i className="fas fa-list"></i><spna>ALL SECTORS</spna></div>
              {this.itemList(label)}</div>
          }
          </div>
        </div>
      </div>
		);
	}
}
attributeValueDropdown.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
	categories:  PropTypes.array.isRequired,
	options:  PropTypes.array.isRequired,
	updateState:  PropTypes.func.isRequired,
  product: PropTypes.object
};

export default attributeValueDropdown;
