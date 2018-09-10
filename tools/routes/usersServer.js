var express =  require('express');
var controllers = require('../controller/usersServerControllers');
var User = require('../model/userModel');

var router = express.Router();

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
}

router.post(
  '/',//API ROOT
  controllers.validPostObjectType,
  post
);

module.exports = router;
