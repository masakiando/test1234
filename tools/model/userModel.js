const bookshelf = require('../bookshelf');

var user = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = user;
