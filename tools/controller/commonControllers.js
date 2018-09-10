// helper functions//

function checkIDisInteger(req, res, next) {
  var pupID = req.params.id;
  if (isNaN(pupID)) {
    res.status(400).json({
      status: 'error',
      message: req.params.id+':'+'It can not contain anything other than an integer'
    });
  } else {
    return next();
  }
}
//Handling common database errors
function errorsHandling(err, req, res, next) {
 if(err.code === "42P01"){//not Table
  res.status(400).json({
    status: 'error',
    message: 'parserOpenTable',
    error: err
  });
  } else {
    res.status(500).json({
      error: err
    });
  }
}

module.exports = {
  errorsHandling: errorsHandling,
  checkIDisInteger: checkIDisInteger
};
