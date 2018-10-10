const XLSX = require("xlsx");
const Utils = XLSX.utils; // XLSX.utilsのalias
// Workbookの読み込み
const book = XLSX.readFile("test.xlsx");
// Sheet1読み込み
const sheet1 = book.Sheets["Sheet1"];
// console.log(sheet1);

var workbook = XLSX.readFile('test.xlsx');
var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    data = [];
    for(z in worksheet) {
        if(z[0] === '!') continue;
        //parse out the column, row, and value
        var col = z.substring(0,1);
        var row = parseInt(z.substring(1));
        var value = worksheet[z].v;

        //store header names
        if(row == 1) {
            headers[col] = value;
            continue;
        }

        if(!data[row]) data[row]={};
        data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
    data.shift();
    data.shift();
    console.log(data);
});

let createRecord = (knex, i) => {
  return knex('categories').insert({
    id: data[i].id,
    category_name: data[i].category_name,
    category_image: null,
    parent_id: data[i].parent_id,
    sort_order: 0,
    category_image_url: data[i].category_image_url
  })
}

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('categories').del()
    .then(() => {
      let records = [];

      for (let i = 0; i < data.length; i++) {
        records.push(createRecord(knex, i))
      }

      return Promise.all(records);
    })
   )
}
// exports.seed = function(knex, Promise) {
//   return knex('categories').del()
//     .then(function() {
//       return categories.map( (item, index) => {
//         return knex('categories').insert({
//           id: item.id,
//           category_name: item.category_name,
//           category_image: item.category_image,
//           parent_id: item.parent_id,
//           sort_order: item.sort_order,
//           category_image_url: item.category_image_url
//         });
//       });
//   });
// };

// exports.seed = function(knex, Promise) {
//   return knex('categories').del() // Deletes ALL existing entries
//     .then(function() {
//        // Inserts seed entries one by one in series
//       return knex('categories').insert({
//         id: 1,
//         category_name: `Men's Fashion`,
//         category_image: null,
//         parent_id: 0,
//         sort_order: 0,
//         category_image_url: "http://res.cloudinary.com/dn7y0c1t5/image/upload/v1538630703/u1rlz5gxdnnyi56yiwkk.png"
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 2,
//         category_name: `Women's Fashion`,
//         category_image: null,
//         parent_id: 0,
//         sort_order: 0,
//         category_image_url: "http://res.cloudinary.com/dn7y0c1t5/image/upload/v1538630623/s24niool3lw05hawb1jh.png"
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 3,
//         category_name: `Phone & Accessories`,
//         category_image: null,
//         parent_id: 0,
//         sort_order: 0,
//         category_image_url: "https://res.cloudinary.com/dn7y0c1t5/image/upload/v1538630794/tiii3i8ngp9gontiopie.png"
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 4,
//         category_name: `T-shirts`,
//         category_image: null,
//         parent_id: 1,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 5,
//         category_name: `ShirtsÂ `,
//         category_image: null,
//         parent_id: 1,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 6,
//         category_name: `Coats & JacketsÂ `,
//         category_image: null,
//         parent_id: 1,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 7,
//         category_name: `Sweater`,
//         category_image: null,
//         parent_id: 4,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 8,
//         category_name: `Sweatshirts`,
//         category_image: null,
//         parent_id: 4,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 9,
//         category_name: `Other`,
//         category_image: null,
//         parent_id: 5,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 10,
//         category_name: `Short Sleeve`,
//         category_image: null,
//         parent_id: 5,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 11,
//         category_name: `Float coats`,
//         category_image: null,
//         parent_id: 6,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 12,
//         category_name: `Jacket`,
//         category_image: null,
//         parent_id: 6,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 13,
//         category_name: `Shirt`,
//         category_image: null,
//         parent_id: 2,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 14,
//         category_name: `Litter`,
//         category_image: null,
//         parent_id: 2,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 15,
//         category_name: `Skirt`,
//         category_image: null,
//         parent_id: 2,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 16,
//         category_name: `Crop-top shirt`,
//         category_image: null,
//         parent_id: 13,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 17,
//         category_name: `Two-piece robe & Tricot`,
//         category_image: null,
//         parent_id: 13,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 18,
//         category_name: `Dress up`,
//         category_image: null,
//         parent_id: 14,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 19,
//         category_name: `Maxi dress`,
//         category_image: null,
//         parent_id: 14,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 20,
//         category_name: `Short skirt legs`,
//         category_image: null,
//         parent_id: 15,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
//     .then(function () {
//       return knex('categories').insert({
//         id: 21,
//         category_name: `Foot pencil skirt`,
//         category_image: null,
//         parent_id: 15,
//         sort_order: 0,
//         category_image_url: null
//       });
//     })
// };
