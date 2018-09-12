var express =  require('express');
var commonControllers = require('../controller/commonControllers');
var controllers = require('../controller/usersServerControllers');
var User = require('../model/userModel');
var Shop = require('../model/shopModel');
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
  console.log(req.body);
  const { username,
          email,
          password
        } = req.body;
  const password_digest = bcrypt.hashSync(password, 10);
  const shop_name = username;

  let user = User.forge({username,email,password_digest,shop_name},{hasTimestamps: true });
  user.save()
  .then(user => {
  let shop = Shop.forge({user_id: user.get('id')},{hasTimestamps: true });
  shop.save()
  .then(user => res.json({ success: true }))
  .catch(function (err) {return next(err);});//errorsHandling
  })
  .catch(function (err) {return next(err);});//errorsHandling
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
