const bookshelf = require('../bookshelf');

// var Category = bookshelf.Model.extend({
//   tableName: 'categories'
// });
//
// module.exports = Category;


const Category = bookshelf.Model.extend({
  tableName: 'categories'
  // products: function() {
  //   return this.hasOne(Product);
  // },
  // connect_products_and_categories: function() {
  //   return this.hasMany(Connect_products_and_categories);
  // },
  // connect_categories_and_attribute_keys: function() {
  //   return this.hasMany(Connect_categories_and_attribute_keys);
  // },
  // connect_categories_and_brands: function() {
  //   return this.hasMany(Connect_categories_and_brands);
  // }
});

module.exports = Category;
