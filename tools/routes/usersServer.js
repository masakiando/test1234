var express =  require('express');
var commonControllers = require('../controller/commonControllers');
var controllers = require('../controller/usersServerControllers');
var User = require('../model/userModel');

var router = express.Router();

router.post(
  '/',//API ROOT
  // controllers.validPostObjectType,
  post,
  commonControllers.errorsHandling
);

// post METHOD FUNCTION
function post(req, res, next) {
  const { username,
          timezone,
          email,
          password
        } = req.body;
  User.forge({
    username,
    timezone,
    email,
    password
  }).save()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
      return next(err);//errorsHandling
  });
}

module.exports = router;
