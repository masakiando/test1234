var express =  require('express');
var colors =  require('colors');
var isEmpty =  require('lodash/isEmpty');
var Validator =  require('Validator');

var router = express.Router();

router.post(
  '/',//API ROOT
  function (req, res) {
     console.log(req.body);
  }
);

module.exports = router;
