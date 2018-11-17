/*
    ClassComponent https://reactjs.org/docs/components-and-props.html
*/

/*-- ClassComponent https://reactjs.org/docs/components-and-props.html --*/
import React, {PropTypes}   from 'react';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions         from './actions/Actions';

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
        <input type="text" name='name' value={this.state.name} onChange={this.updateState}/>
      </div>
    );
  }
}

ManageForm.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    xxxxx: state.xxxxx
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)( ManageForm );
