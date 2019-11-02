'use strict';

var passport = require("passport"),
FacebookTokenStrategy = require('passport-facebook-token'),
config = require('../config/facebook-config');

module.exports = function () {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  
  passport.use('facebook-token', new FacebookTokenStrategy({
      clientID: config.facebook_api_key,
      clientSecret:config.facebook_api_secret
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        var user = {
          'email': profile.emails[0].value,
          'name' : profile.name.givenName + ' ' + profile.name.familyName,
          'id'   : profile.id,
          'token': accessToken
        }
        console.log(user);
        return done(null, user);
      });
    }));

  app.use(passport.initialize());
  app.use(passport.session());
};