const data = [
  { id: 0, attribute_key_id: 0, attribute_values_id: 0 },
  { id: 1, attribute_key_id: 0, attribute_values_id: 1 },
  { id: 2, attribute_key_id: 0, attribute_values_id: 2 },
  { id: 3, attribute_key_id: 0, attribute_values_id: 3 },
  { id: 4, attribute_key_id: 0, attribute_values_id: 4 },
  { id: 5, attribute_key_id: 0, attribute_values_id: 5 },
  { id: 6, attribute_key_id: 0, attribute_values_id: 6 },
  { id: 7, attribute_key_id: 0, attribute_values_id: 7 },
  { id: 8, attribute_key_id: 0, attribute_values_id: 8 },
  { id: 9, attribute_key_id: 0, attribute_values_id: 9 },
  { id: 10, attribute_key_id: 0, attribute_values_id: 10 },
  { id: 11, attribute_key_id: 0, attribute_values_id: 11 },
  { id: 12, attribute_key_id: 0, attribute_values_id: 12 },
  { id: 13, attribute_key_id: 0, attribute_values_id: 13 },
  { id: 14, attribute_key_id: 0, attribute_values_id: 14 },
  { id: 15, attribute_key_id: 0, attribute_values_id: 15 },
  { id: 16, attribute_key_id: 0, attribute_values_id: 16 },
  { id: 17, attribute_key_id: 0, attribute_values_id: 17 },
  { id: 18, attribute_key_id: 0, attribute_values_id: 18 },
  { id: 19, attribute_key_id: 0, attribute_values_id: 19 },
  { id: 20, attribute_key_id: 0, attribute_values_id: 20 },
  { id: 21, attribute_key_id: 0, attribute_values_id: 21 },
  { id: 22, attribute_key_id: 0, attribute_values_id: 22 },
  { id: 23, attribute_key_id: 0, attribute_values_id: 23 },
  { id: 24, attribute_key_id: 0, attribute_values_id: 24 },
  { id: 25, attribute_key_id: 0, attribute_values_id: 25 },
  { id: 26, attribute_key_id: 1, attribute_values_id: 26 },
  { id: 27, attribute_key_id: 1, attribute_values_id: 27 },
  { id: 28, attribute_key_id: 1, attribute_values_id: 28 },
  { id: 29, attribute_key_id: 2, attribute_values_id: 29 },
  { id: 30, attribute_key_id: 2, attribute_values_id: 30 },
  { id: 31, attribute_key_id: 2, attribute_values_id: 31 },
  { id: 32, attribute_key_id: 2, attribute_values_id: 32 },
  { id: 33, attribute_key_id: 2, attribute_values_id: 33 } ]


let createRecord = (knex, i) => {
  return knex('connect_attribute_key_and_attribute_value').insert({
    id: data[i].id,
    attribute_key_id: data[i].attribute_key_id,
    attribute_values_id: data[i].attribute_values_id
  })
}

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('connect_attribute_key_and_attribute_value').del()
    .then(() => {
      let records = [];

      for (let i = 0; i < data.length; i++) {
        records.push(createRecord(knex, i))
      }

      return Promise.all(records);
    })
   )
}
