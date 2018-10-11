
exports.up = function(knex, Promise) {
return knex.schema.createTable('connect_categories_and_attribute_keys', function(table){
table.increments('id').index().unsigned().primary();
table.integer('category_id').index().unsigned().notNullable().references('id').inTable('categories').onDelete('CASCADE');
table.integer('attribute_key_id').index().unsigned().notNullable().references('id').inTable('attribute_keys').onDelete('CASCADE');
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('connect_categories_and_attribute_keys');
};
