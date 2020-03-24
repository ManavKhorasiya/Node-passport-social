var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: "INSERT HERE",
    clientSecret: "INNSERT HERE",
    callbackURL: "http://localhost:3005/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, function (err, user) {
        if (err) { return done(err); }
        done(null, user);
       });
  }
));

module.exports = passport;