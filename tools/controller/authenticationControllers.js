// helper functions//
var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../model/userModel');

function authentication(req, res, next) {
  const authenticationHeader = req.headers['authentication'];
  let token;
  if (authenticationHeader) {
    token = authenticationHeader.split(' ')[1];
  }

  if (token) {
   jwt.verify(token, config.jwtSecret, (err, decoded) => {
     if (err) {
       res.status(401).json({ error: 'Failed to authenticate' });
     } else {
       User.query({
         where: { id: decoded.id },
         select: [ 'email', 'id', 'username' ]
       }).fetch().then(user => {
         if (!user) {
           res.status(404).json({ error: 'No such user' });
         } else {
           req.userId = decoded.id;
           next();
         }
       });
     }
   });
  } else {
    res.status(403).json({ error: 'No token provided' });
  }
}

module.exports = {
  authentication: authentication
};
