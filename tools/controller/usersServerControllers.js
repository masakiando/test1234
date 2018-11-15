var commonValidations =  require('../validations/signupValidator');
var isEmpty =  require('lodash/isEmpty');

function validPostObjectType(req, res, next) {
  let { errors } = commonValidations(req.body);
  if( !isEmpty(errors) ) {
    res.status(400).json(errors);
  } else {
    return next();
  }
}


module.exports = {
  validPostObjectType: validPostObjectType
};
