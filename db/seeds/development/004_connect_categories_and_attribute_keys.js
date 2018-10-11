
exports.seed = function(knex, Promise) {
  return knex('connect_categories_and_attribute_keys').del() // Deletes ALL existing entries
    .then( setTimeout( () =>{ // Inserts seed entries one by one in series
      console.log("hello connect_categories_and_attribute_keys");
    }, 3000))
    .then(()=>{  // Inserts seed entries one by one in series
      return knex('connect_categories_and_attribute_keys').insert({
       id:0,
       category_id: 35,
       attribute_key_id: 0
      });
    })
    .then(()=>{  // Inserts seed entries one by one in series
      return knex('connect_categories_and_attribute_keys').insert({
       id:1,
       category_id: 35,
       attribute_key_id: 1
      });
    });
  };
