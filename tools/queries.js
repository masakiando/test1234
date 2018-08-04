var startkit = require('./startkitModel');
// *** queries *** //

export function getAll() {
  return startkit.collection()
  .fetch()
  .then(function(data) {
    return data;
  });
}

module.exports = {
  getAll: getAll
};
