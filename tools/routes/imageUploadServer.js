// require('dotenv').config();
// var express =  require('express');
// const cloudinary = require('cloudinary');
//
// var router = express.Router();
//
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });
//
// router.post('/', (req, res) => {
//   const values = Object.values(req.files);
//   const promises = values.map(image => cloudinary.uploader.upload(image.path));
//
//   Promise
//     .all(promises)
//     .then(results => res.json(results))
//     .catch((err) => res.status(400).json(err));
// });
//
// router.delete('/:_id', (req, res) => {
//   console.log(req.params._id);
//   cloudinary.v2.uploader.destroy( req.params._id,
//     function(error, result){
//      console.log(result, error);
//    })
//    .then(results => res.json(results))
//    .catch((err) => res.status(400).json(err));
// });
//
// module.exports = router;
