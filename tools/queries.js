var startkit = require('./startkitModel');
// *** queries *** //
function getAll() {
  return startkit.collection()
  .fetch()
  .then(function(data) {
    return data;
  });
}

module.exports = {
  getAll: getAll
};
