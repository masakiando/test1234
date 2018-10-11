 const data =[
  { id: 0, attribute_value_name: 'No Brand' },
  { id: 1, attribute_value_name: '20 again ' },
  { id: 2, attribute_value_name: 'Abercrombie & Fitch ' },
  { id: 3, attribute_value_name: 'Accessorize' },
  { id: 4, attribute_value_name: 'Acne Studios' },
  { id: 5, attribute_value_name: 'adenflu ' },
  { id: 6, attribute_value_name: 'Adidas ' },
  { id: 7, attribute_value_name: 'Aeropostale ' },
  { id: 8, attribute_value_name: 'AGE2X ' },
  { id: 9, attribute_value_name: 'aimilian' },
  { id: 10, attribute_value_name: 'Morgan, too ' },
  { id: 11, attribute_value_name: 'ALA' },
  { id: 12, attribute_value_name: 'Aldo' },
  { id: 13, attribute_value_name: 'Altar\'d State ' },
  { id: 14, attribute_value_name: 'AMADO' },
  { id: 15, attribute_value_name: 'Amy Towns ' },
  { id: 16, attribute_value_name: 'Anadi Home ' },
  { id: 17, attribute_value_name: 'Anita' },
  { id: 18, attribute_value_name: 'Anna Sui ' },
  { id: 19, attribute_value_name: 'Anne Klein' },
  { id: 20, attribute_value_name: 'Aproms' },
  { id: 21, attribute_value_name: 'Arizona Jeans ' },
  { id: 22, attribute_value_name: 'Armani Exchange ' },
  { id: 23, attribute_value_name: 'ASOS' },
  { id: 24, attribute_value_name: 'Autograph' },
  { id: 25, attribute_value_name: 'Miss it' },
  { id: 26, attribute_value_name: 'long sleeve ' },
  { id: 27, attribute_value_name: 'Short Sleeve ' },
  { id: 28, attribute_value_name: 'no hands' },
  { id: 29, attribute_value_name: 'Chiffon ' },
  { id: 30, attribute_value_name: 'Thun ' },
  { id: 31, attribute_value_name: 'knitting' },
  { id: 32, attribute_value_name: 'Cow' },
  { id: 33, attribute_value_name: 'Da / Suede' } ]

let createRecord = (knex, i) => {
  return knex('attribute_values').insert({
    id: data[i].id,
    attribute_value_name: data[i].attribute_value_name
  })
}

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('attribute_values').del()
    .then(() => {
      let records = [];

      for (let i = 0; i < data.length; i++) {
        records.push(createRecord(knex, i))
      }

      return Promise.all(records);
    })
   )
}
