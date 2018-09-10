var express =  require('express');
var commonControllers = require('../controller/commonControllers');
var controllers = require('../controller/usersServerControllers');
var User = require('../model/userModel');
var bcrypt = require('bcrypt');

var router = express.Router();

router.post(
  '/',//API ROOT
  // controllers.validPostObjectType,
  post,
  commonControllers.errorsHandling
);

// post METHOD FUNCTION
function post(req, res, next) {
  const { user_name,
          email,
          password
        } = req.body;
  const password_digest = bcrypt.hashSync(password, 10);

  User.forge({
    user_name,
    email,
    password_digest
  },{ hasTimestamps: true }).save()
  .then(user => res.json({ success: true }))
  .catch(function(err) {
      return next(err);//errorsHandling
  });
}

// req.method get post put delete not
router.use((req, res) => {
  res.status(404).json({
    errors: {
      global: `Still working on it. Please try again later when we implement it`
    }
  });
});

module.exports = router;
