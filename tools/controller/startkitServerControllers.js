var Startkit = require('../models/startkitModel');
var isEmpty =  require('lodash/isEmpty');

// We guarantee that the ID parameter exists from the query string
function checkId(req, res, next) {
  var pupID = parseInt(req.params.id);
    Startkit.query({
      where: { id: req.params.id }
    })
    .fetch()
    .then(function(data) {
      if(!data) {
        /* jshint ignore:start */
        res.status(400)
          .json({
            status: 'error',
            message: `ID '${pupID}' does not exist.`,
            error: pupID
          });
        /* jshint ignore:end */
      } else {
        return next();
      }
    })
    .catch(function(err) {
      return next(err);
    });
}
// ********** POST **********

function validPostObjectKey(req, res, next) {
  var payload = req.body;
  var keys = ['name', 'channel', 'genre', 'rating', 'explicit'];
  var errors = [];
  keys.forEach(function(key){
    if(!(key in payload)) {
      errors.push(key);
    }
  });
  if( !(isEmpty(errors)) ){
    res.status(400).json({
      status: 'error',
      message: `Invalid JSON. '${errors}' does not exist.`,
      error: errors
    });
  } else {
    return next();
  }
}
//
function validPostObjectType(req, res, next) {
  // var { name, channel, genre, rating, explicit } = req.body;
  var errors = {};
  var message = '入力が必須です。';
  if (!req.body.name) errors.name = message;
  if (!req.body.channel) errors.channel = message;
  if (!req.body.genre) errors.genre = message;
  if (!req.body.rating) errors.rating = message;
  if (!req.body.explicit) errors.explicit = message;
  if( !isEmpty(errors) ) {
    res.status(400).json(errors);
  } else {
    return next();
  }
}

// ********** PUT **********

function validPutObjectKey(req, res, next) {
    var obj = req.body;
    var array = [];
    Object.keys(obj).forEach((key)=> {
       if (!(/id|channel|explicit|genre|name|rating/.test(key))) {
         array.push(key);
       }
       if(key ==='id') {
         return res.status(422).json({
           status: 'error',
           message: 'key No Rows Updated.',
           error: key
         });
       }
    });
    if( !(isEmpty(array)) ){
      res.status(400).json({
        status: 'error',
        message: array+' '+'key Unknown KEY',
        error: array
      });
    } else {
      return next();
    }
}

function validPutObjectType(req, res, next) {
  var obj = req.body;
  var errors = {};
  var message = '入力が必須です。';
  for (var key in obj) {
    if(key==="name"){
      if (!obj[key]) {
        errors.name = message;
      }
    }
    if(key==="channel"){
      if (!obj[key]) {
        errors.channel = message;
      }
    }
    if(key==="genre"){
      if (!obj[key]) {
        errors.genre = message;
      }
    }
    if(key==="rating"){
      if ( isNaN(obj[key]) ) {
        errors.rating = '数字のみを入力してください';
      }
    }
    if(key==="explicit"){
      if ( !( /false|true/.test(obj[key]) ) ) {
      console.log('hihihihihihihi');
        errors.explicit = 'The :attr field must be true or false.';
      }
    }
  }
  if( !isEmpty(errors) ) {
    res.status(400).json(errors);
  } else {
    return next();
  }
}

module.exports = {
  checkId: checkId,
  validPostObjectKey: validPostObjectKey,
  validPostObjectType: validPostObjectType,
  validPutObjectKey: validPutObjectKey,
  validPutObjectType: validPutObjectType
};
