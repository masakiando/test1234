
exports.seed = function(knex, Promise) {
  return knex('attribute_keys').del()
   // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('attribute_keys').insert({
        id:0,
        attribute_key_name: 'Trademark'
      });
    })
    .then(function() { // Inserts seed entries one by one in series
      return knex('attribute_keys').insert({
        id: 1,
        attribute_key_name: 'Type of hand'
      });
    })
    .then(function() { // Inserts seed entries one by one in series
      return knex('attribute_keys').insert({
        id: 2,
        attribute_key_name: 'Material'
      });
    })
  };
