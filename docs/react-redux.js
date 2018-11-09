/*
    react-redux import connect
    redux       import bindActionCreators
    Actions     import
    actions     propTypes
    mapStateToProps
    mapDispatchToProps
    connect
*/

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions/Actions';

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
