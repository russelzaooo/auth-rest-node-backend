var passport = require('passport'),
token = require('../common/token');

exports.authenticate = function(req, res){
  console.log("Autenticando...")

  passport.authenticate('facebook-token', {session: false});
    
  console.log("Verifica usuário")
  console.log(req)
  if (!req.user) {
    return res.send(401, 'User Not Authenticated');
  }

  // prepare token for API
  req.auth = {
    id: req.user.id
  };

  req.token = token.createToken(req.auth);

  res.setHeader('x-auth-token', req.token);
  res.status(200).send(req.auth);
} 