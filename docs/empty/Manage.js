import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/Actions';
import Form from '../screens/Form';
var commonValidations =  require('../validations/Validator');
import toastr from 'toastr';
