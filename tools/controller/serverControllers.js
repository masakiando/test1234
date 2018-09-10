// helper functions//
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
  errorsHandling: errorsHandling
};
