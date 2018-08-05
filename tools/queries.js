var colors =  require('colors');
var startkit = require('./startkitModel');
// *** queries *** //

function getAll() {
  return startkit.collection();
  // .fetch()
  // .then(function(data) {
  //   return data;
  // });
}


function saveStartkit(data) {
  console.log('hai queries dayo'.blue);
  console.log(data);
  var channel = data.channel;
  var explicit = data.explicit;
  var genre = data.genre;
  var name = data.name;
  var rating = data.rating;
  // const { channel, explicit, genre, name, rating } = data.channel;
  return startkit.forge(
    { channel, explicit, genre, name, rating }).save()
  .then(function(data) {
    return data;
  });
}
//

module.exports = {
  getAll: getAll,
  saveStartkit: saveStartkit
};
