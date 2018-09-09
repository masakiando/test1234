var express =  require('express');
var commonValidations =  require('../shared/validations/signupValidator');
var isEmpty =  require('lodash/isEmpty');
var controllers = require('../controller/usersServerControllers');

var router = express.Router();

router.post(
  '/',//API ROOT
  controllers.validPostObjectType
);

module.exports = router;
