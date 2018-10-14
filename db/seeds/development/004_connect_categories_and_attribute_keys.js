
exports.seed = function(knex, Promise) {
  return knex('connect_categories_and_attribute_keys').del() // Deletes ALL existing entries
    .then( setTimeout( () =>{ // Inserts seed entries one by one in series
      console.log("hello connect_categories_and_attribute_keys");
    }, 3000))
    .then(()=>{  // Inserts seed entries one by one in series
      return knex('connect_categories_and_attribute_keys').insert({
       id:0,
       category_id: 26,
       attribute_key_id: 0
      });
    })
    .then(()=>{  // Inserts seed entries one by one in series
      return knex('connect_categories_and_attribute_keys').insert({
       id:1,
       category_id: 26,
       attribute_key_id: 1
      });
    })
    .then(()=>{  // Inserts seed entries one by one in series
      return knex('connect_categories_and_attribute_keys').insert({
       id:2,
       category_id: 26,
       attribute_key_id: 2
      });
    })
    .then(()=>{  // Inserts seed entries one by one in series
      return knex('connect_categories_and_attribute_keys').insert({
       id:3,
       category_id: 27,
       attribute_key_id: 0
      });
    })
    .then(()=>{  // Inserts seed entries one by one in series
      return knex('connect_categories_and_attribute_keys').insert({
       id:4,
       category_id: 27,
       attribute_key_id: 1
      });
    })
    .then(()=>{  // Inserts seed entries one by one in series
      return knex('connect_categories_and_attribute_keys').insert({
       id:5,
       category_id: 27,
       attribute_key_id: 2
      });
    })
  };
