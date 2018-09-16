var express =  require('express');
var controllers = require('../controller/authenticationControllers');

var router = express.Router();

router.post(
  '/', controllers.authentication, post
);

function post(req, res, next) {
  res.status(201).json({ user: req.currentUser });
}

module.exports = router;
