const jwt = require('jsonwebtoken');

const username = "ade1256"
const password = "ade12561256"

module.exports = function (server, router) {

	server.post('/login',(req, res, next) => {
    let p_username = req.body.username
    let p_password = req.body.password
    if(p_username == username && p_password == password){
      var token = jwt.sign(
        { username: username }, 
        'rajawalicinemasecretkey',
        (err, token) => {
          res.send({
           ok: true,
           message: "Login successful",
           token,
          })
        })
    } else {
     res.send({
      ok: false,
      message: "Username or password incorrect"
     })
    }
   })

};