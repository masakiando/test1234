import React, {PropTypes} from 'react';
import axios from 'axios';

class CategoryDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			expanded2: false,
			expanded3: false,
			value1: 'カテゴリを選択してください',
			value2: '',
			value3: '',
      active: 0,
      active2: 0,
      active3: 0,
      categoryList1_id: 0,
      categoryList2_id: 0
		};

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleItemClick_2 = this.handleItemClick_2.bind(this);
    this.handleItemClick_3 = this.handleItemClick_3.bind(this);
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.collapse = this.collapse.bind(this);
	}

	collapse() {
		this.setState({
      expanded: false,
      expanded2: false,
      expanded3: false
    });
    debugger;
    if(this.state.categoryList2_id > 0) {
      axios(`/api/attribute/${this.state.categoryList2_id}`)
        .then(res => {
          // res.status(200).json(results);
          const attributeOptions = res.data.results1;
          const attributeOptions2 = res.data.results2;
          console.log(attributeOptions2);
          debugger;

          this.props.updateState({
            attributeOptions: attributeOptions,
            attributeOptions2: attributeOptions2,
            attributeOptionsOpen: true
          });
        });
    }
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
			expanded2: true,
      expanded3: false,
      value2: '', active2: 0,
      value3: '', active3: 0
		};

		this.setState(newState);
    debugger;
    this.props.updateState({
      product:{
        categoryList1_name: text,
        categoryList1_id: tableId
      }
    });
	}

  handleItemClick_2(event) {
    event.preventDefault();
    let text = event.target.innerText;
    let itemIndex = event.target.value;
    let tableId = parseInt(event.target.id, 10);
    this.setState({
      value2: text,
      active2: itemIndex,
      expanded3: true,
      value3: '',
      active3: 0,
      categoryList2_id: tableId
    });
  }

  handleItemClick_3(e) {
    event.preventDefault();
    let text = e.target.innerText;
    let itemIndex = e.target.value;
    this.setState({
      value3: text,
      active3: itemIndex,
      expanded: false,
      expanded2: false,
      expanded3: false
    });
  }

  isActive(value){
    if(this.state.active === value){
        return 'active';
    }
  }
  isActive_2(value){
    if(this.state.active2 === value){
        return 'active';
    }
  }

  isActive_3(value){
    if(this.state.active3 === value){
        return 'active';
    }
  }
	handleTriggerClick() {
    this.setState({
      expanded: !this.state.expanded
    });

    if(this.state.active !== 0){
      this.setState({
        expanded2: !this.state.expanded2
      });
    }

    if(this.state.active2 !== 0){
      this.setState({
        expanded3: !this.state.expanded3
      });
    }

	}

  itemList() {
    return this.props.categories.map( (item, index) => {
      if( item.parent_id === 0 ) {
        return (
          <div
            key={index}
            onClick={this.handleItemClick}
            className={this.isActive(index+1) + ' item'}
            value={index+1}
            id={item.id}>
            {item.category_name} <i className="fas fa-angle-right"></i>
          </div>
        );
      }
    });
  }

  itemList_2() {
    return this.props.categories.map( (item, index) => {
      if( item.parent_id === this.state.categoryList1_id ) {
        return  (
          <div
            key={index}
            onClick={this.handleItemClick_2}
            className={this.isActive_2(index+1) + ' item'}
            value={index+1}
            id={item.id}>
            {item.category_name} <i className="fas fa-angle-right"></i>
          </div>
        );
      }
    });
  }
  itemList_3() {
    debugger;
    return this.props.categories.map( (item, index) => {
      if( item.parent_id === this.state.categoryList2_id ) {
        return  (
          <div
            key={index}
            onClick={this.handleItemClick_3}
            className={this.isActive_3(index+1) + ' item'}
            value={index+1}>
            {item.category_name}
          </div>
        );
      }
    });
  }

	render() {
		return (
			<div>
			<label className="is-normal" htmlFor="Categories">
				<label className="label">Categories</label>
			</label>
			<div className={`category-dropdown ${this.state.expanded ? 'active' : ''}`}
        style={{zIndex: 10000000}}
				tabIndex="0"
				onBlur={this.collapse}>
				<div className="trigger"
             style={this.state.expanded ? {
               borderWidth: '1px 1px 0px 1px',
               borderColor: '#00bfa5',
               borderStyle: 'solid'
             } : {border: '1px solid #ff5722'}
             }
             onClick={this.handleTriggerClick}>
          <div className="trigger__inner">
            <span >
              {this.state.value1}
              {this.state.active2 !== 0 ? <i className="fas fa-angle-right"></i> : ''}
              {this.state.value2}
              {this.state.active3 !== 0 ? <i className="fas fa-angle-right"></i>: ''}
              {this.state.value3}
            </span>
            <span>
              {this.state.active3 !== 0 ? <i className="fas fa-check"></i>: ''}
            </span>
          </div>
				</div>
        {this.state.expanded && <div className="category_boundary"><i className="fas fa-list"></i><spna>ALL SECTORS</spna></div>}
        <div className="contents"
            style={this.state.expanded ? {
              borderWidth: '0px 1px 1px 1px',
              borderColor: '#00bfa5',
              borderStyle: 'solid'
            } : {border: '0px solid #ff5722'}
            }
          >
          {this.state.expanded &&
            <div className="content">{this.itemList()}</div>}
          {this.state.expanded2 &&
            <div className="content contentanime">{this.itemList_2()}</div>}
          {this.state.expanded3 &&
            <div className="content contentanime">{this.itemList_3()}</div>}
        </div>
			</div>
			</div>
		);
	}
}
CategoryDropdown.propTypes = {
	categories:  PropTypes.array.isRequired,
	updateState:  PropTypes.func.isRequired,
  product: PropTypes.object
};

export default CategoryDropdown;
