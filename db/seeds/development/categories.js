var faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('categories').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('categories').insert({
        category_name: `Men's Fashion`,
        category_image: null,
        parent_id: 0,
        sort_order: 0,
        category_image_url: "https://cf.shopee.vn/file/0eaf8a3b120e1e03bb52ce4d2322494f_tn"
      });
    })
    .then(function () {
      return knex('categories').insert({
        category_name: `Women's Fashion`,
        category_image: null,
        parent_id: 0,
        sort_order: 0,
        category_image_url: "https://cf.shopee.vn/file/9d6165d1809146c4fde897f2b11b1e3c_tn"
      });
    })
};
