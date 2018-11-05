var express =  require('express');
var colors =  require('colors');
var isEmpty =  require('lodash/isEmpty');
var Category = require('../models/categoryModel');
var Startkit = require('../models/startkitModel');

var commonControllers = require('../controller/commonControllers');
var router = express.Router();

console.log('starting categoriesServer...'.white);

router.get('/',//API ROOT
  get,//REQ.METHOD TO FUNCTION
  commonControllers.errorsHandling//TO DE.HANDLING
);
function get(req, res, next) {
  Category.collection()
  .fetch()
  .then(function(data) {
    res.status(200).json(data);
  })
  .catch(function(err) {
    return next(err);
  });
}
module.exports = router;
