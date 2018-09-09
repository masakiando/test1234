var commonValidations =  require('../shared/validations/signupValidator');
var isEmpty =  require('lodash/isEmpty');

function validPostObjectType(req, res, next) {
  // var { name, channel, genre, rating, explicit } = req.body;
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
