import React, {PropTypes} from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      options: Object.assign([], this.props.options),
      options2: Object.assign([], this.props.options2),
      options3: Object.assign([], this.props.options3),
			expanded: false,
			expanded2: false,
			expanded3: false,
			value1: 'カテゴリを選択してください',
			value2: '',
			value3: '',
      active: 0,
      active2: 0,
      active3: 0
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
	}

	handleItemClick(event) {
    event.preventDefault();
    let text = event.target.innerText;
    let itemIndex = event.target.value;

		this.setState({
      value1: text,
      active: itemIndex,
			expanded2: true,
      expanded3: false,
      value2: '', active2: 0,
      value3: '', active3: 0
		});
	}

  handleItemClick_2(event) {
    event.preventDefault();
    let text = event.target.innerText;
    let itemIndex = event.target.value;
    this.setState({
      value2: text,active2: itemIndex,
      expanded3: true, value3: '', active3: 0
    });
  }

  handleItemClick_3(e) {
    event.preventDefault();
    let text = e.target.innerText;
    let itemIndex = e.target.value;
    this.setState({
      value3: text, active3: itemIndex,
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
    return this.state.options.map( (item, index) => (
          <div
              key={index}
              onClick={this.handleItemClick}
              className={this.isActive(index+1) + ' item'}
              value={index+1}
          >
              {item}
              <i className="fas fa-angle-right"></i>
          </div>
        )
      );
  }

  itemList_2() {
    return this.state.options2.map( (item, index) => (
          <div
              key={index}
              onClick={this.handleItemClick_2}
              className={this.isActive_2(index+1) + ' item'}
              value={index+1}
          >
              {item}
              <i className="fas fa-angle-right"></i>
          </div>
        )
      );
  }
  itemList_3() {
    return this.state.options3.map( (item, index) => (
          <div
              key={index}
              onClick={this.handleItemClick_3}
              className={this.isActive_3(index+1) + ' item'}
              value={index+1}
          >
              {item}
          </div>
        )
      );
  }

	render() {
		return (
			<div className={`dropdown ${this.state.expanded ? 'active' : ''}`}
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
            <span>
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
        {this.state.expanded && <div className="boundary"><i className="fas fa-list"></i><spna>ALL SECTORS</spna></div>}
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
		);
	}
}
Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  options2: PropTypes.array.isRequired,
  options3: PropTypes.array.isRequired
};

Dropdown.defaultProps = {
  options: [
    'Strawberry Cream', 'Chocolate Flakes', 'Marshmallow Sprinkles',
    'Strawberry Cream', 'Chocolate Flakes', 'Marshmallow Sprinkles'
  ],
  options2: [
    'hello', 'hello2', 'hello3'
  ],
  options3: [
    'test1', 'test2', 'test3'
  ]
};

export default Dropdown;

// options: [
//   { id: 0, name:'Strawberry Cream'},
//   { id: 1, name:'Chocolate Flakes'},
//   { id: 2, name:'Marshmallow Sprinkles'},
//   { id: 3, name:'Strawberry Cream'},
//   { id: 4, name:'Strawberry Cream'},
//   { id: 5, name:'Strawberry Cream'}
// ]
