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
  let errors = {};
 if(err.code === "42P01"){//not Table
     errors.form = 'parserOpenTable';
     res.status(400).json(errors);

 } else if (err.code === "23505"){
     errors.form = req.body.name+' '+'not unique.';
     res.status(400).json(errors);

 } else if(err.code === "23502") {
     errors.form = err.column+' '+'column does not exist.';
     res.status(400).json(errors);

  } else {
    errors.form = 'ERROR';
    res.status(500).json(errors);
  }
}

module.exports = {
  errorsHandling: errorsHandling,
  checkIDisInteger: checkIDisInteger
};
