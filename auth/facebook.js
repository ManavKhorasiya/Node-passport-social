var passport = require('passport')
    ,FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

passport.use(new FacebookStrategy ( {
    clientID: "485411548702164",
    clientSecret : "61e533d0baff7d133d039d419c86c2f8",
    callbackURL : 'http://localhost:3005/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;