module.exports = function(app) {
  var controller = require('./controller/controller.js');
  var facebook_controller = require('./controller/facebook-controller.js');
  var passport = require('passport'),
  token = require('./common/token');

  app.get('/api/v1/hello/',controller.hello);

  app.post('/api/v1/auth/facebook',
  passport.authenticate(['facebook-token']), 
    function (req, res) {

        if (req.user){
            
            res.status(200).send({'secrets':['array','of','top','secret','information']})
        } else {
            
            res.status(401)
        }
    });
};
