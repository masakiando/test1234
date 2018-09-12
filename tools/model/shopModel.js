const bookshelf = require('../bookshelf');

const UserModel = require('./UserModel');

var shop = bookshelf.Model.extend({
  tableName: 'shops',
  user: function() {
    return this.belongsTo(UserModel);
  }
});

module.exports = shop;
