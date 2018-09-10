exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id').index().unsigned().primary();
    table.string('user_name').index().notNullable().unique();
    table.string('email').index().notNullable().unique();
    table.string('password_digest').unique().notNullable();
    table.string('shop_name').unique().notNullable();
    table.string('sex');
    table.string('birthday');
    table.binary('avatar');
    table.string('creditcard_number_digest');
    table.string('creditcard_security_digest');
    table.string('creditcard_y');
    table.string('creditcard_m');
    table.string('creditcard_d');
    table.string('address');
    table.timestamps();
  }).then(function (){
    return knex.schema.createTable('shops', function(table){
      table.increments('id').index().unsigned().primary();
      table.integer('user_id').unsigned().notNull()
      .references('id').inTable('users').onDelete('CASCADE');
      table.string('description');
      table.binary('shop_image_1');
      table.binary('shop_image_2');
      table.binary('shop_image_3');
      table.binary('shop_image_4');
      table.binary('shop_image_5');
      table.binary('avatar');
      table.binary('cover');
      table.string('youtube_url');
      table.string('address');
      table.timestamps();
    });
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shops').then(function () {
    return knex.schema.dropTable('users');
  })
};
