import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextFieldGroup from './../../commonScreens/recycle/Form/Input/TextFieldGroup';
import * as Actions from './actions/Actions';
import * as flashMessagesActions from '../../actions/flashMessagesActions';

class BuyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [ event.target.name ]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.buy(this.state);
    this.props.flashMessagesActions.addFlashMessage({
      type: 'success',
      text: 'Buy!'
    });
  }

  render() {
    const {
      title,
      errors,
      isLoading
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Manage BuyPage</h1>

        <TextFieldGroup
          name="title"
          label="Workshop Title"
          value={title}
          error={errors.title}
          onChange={this.onChange}
        />

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}

BuyPage.propTypes = {
  actions: PropTypes.object.isRequired,
  flashMessagesActions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
    flashMessagesActions: bindActionCreators(flashMessagesActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(BuyPage);
