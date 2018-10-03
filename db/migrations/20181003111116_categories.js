var faker = require('faker');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table){
  table.increments('id').index().unsigned().primary();
  table.string('category_name').index();
  table.binary('category_image');
  table.integer('parent_id').index();
  table.integer('sort_order');
  table.string('category_image_url', [2083])
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
