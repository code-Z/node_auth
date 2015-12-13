var FacebookStrategy = require('passport-facebook').Strategy;

var User       = require('../models/User');

var configAuth = require('./secrets');

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new FacebookStrategy({
    clientID     : configAuth.facebookAuth.clientID,
    clientSecret : configAuth.facebookAuth.clientSecret,
    callbackURL  : configAuth.facebookAuth.callbackURL
  },
  function (token, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log(profile);
      User.findOne({ facebookId: profile.id }, function (error, user) {
        if (error)
          return done(error);
        if (user)
          return done(null, user);
        else {
          var newUser = new User();

          newUser.facebookId    = profile.id;
          newUser.token = token;
          newUser.name  = profile.name.givenName + ' ' + profile.name.familyName
          newUser.email = profile.emails[0].value;

          newUser.save(function (err, user) {
            if (err)
              return done(err);
            return done(null, user);
          });
        }
      });
    });
  }));
}