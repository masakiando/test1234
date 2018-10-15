var express =  require('express');
var colors =  require('colors');
var knex = require('../knex.js');

var commonControllers = require('../controller/commonControllers');
var router = express.Router();

console.log('starting attributeServer...'.white);

router.get('/:id',//API ROOT
  getSingle,//REQ.METHOD TO FUNCTION
  commonControllers.errorsHandling//TO DE.HANDLING
);

router.get('/',//API ROOT
  getKeyandValue,//REQ.METHOD TO FUNCTION
  commonControllers.errorsHandling//TO DE.HANDLING
);

function getKeyandValue(req, res, next) {
  return knex.select('*').from('attribute_keys')
  .rightJoin('connect_attribute_key_and_attribute_value',
    'attribute_keys.id', 'connect_attribute_key_and_attribute_value.attribute_key_id')
  .rightJoin('attribute_values',
    'attribute_values.id', "connect_attribute_key_and_attribute_value.attribute_values_id")
  .then(function(results) {
    res.status(200).json(results);
  })
  .catch(function(err) {
    return next(err);
  });
}

function getSingle(req, res, next) {
  console.log(req.params.id);
  var ID = req.params.id;
  // return knex('categories').select()
  return knex.select('*').from('categories')
  .rightJoin('connect_categories_and_attribute_keys',
    'categories.id', 'connect_categories_and_attribute_keys.category_id')
  .rightJoin('attribute_keys',
    'attribute_keys.id', "connect_categories_and_attribute_keys.attribute_key_id")
  .where('category_id', ID)
  .then(function(results1) {
    return knex.select('*').from('attribute_keys')
    .rightJoin('connect_attribute_key_and_attribute_value',
      'attribute_keys.id', 'connect_attribute_key_and_attribute_value.attribute_key_id')
    .rightJoin('attribute_values',
      'attribute_values.id', "connect_attribute_key_and_attribute_value.attribute_values_id")
      .then(function(results2) {
        console.log(results1);
        console.log(results2);
        // res.status(200).json(results);
        res.status(200).
        json({results1, results2});
      })
      .catch(function(err) {
        return next(err);
      });
  })
  .catch(function(err) {
    return next(err);

  });
}
module.exports = router;
