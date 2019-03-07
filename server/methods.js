let jwt = require('jsonwebtoken');
module.exports.ensureToken = function(req, res, next) {
 var bearerHeader = req.headers["authorization"]
 if(typeof bearerHeader !== 'undefined') {
  const bearer = bearerHeader.split(" ")
  const bearerToken = bearer[1]
  jwt.verify(bearerToken, 'rajawalicinemasecretkey', (err, result) => {
    if(err) { res.sendStatus(403) }
    else{ next() }
  });
 } else {
  res.sendStatus(403)
 }
}