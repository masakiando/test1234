/*
    ClassComponent https://reactjs.org/docs/components-and-props.html
*/

/*-- ClassComponent https://reactjs.org/docs/components-and-props.html --*/
import React, {PropTypes}   from 'react';

class ManageForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: 'hello state'
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    return this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" name='name' value={this.state.name}/>
      </div>
    );
  }
}

export default ManageForm;
