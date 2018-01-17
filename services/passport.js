/*
 * FILENAME:  passport.js
 * PROJECT:   flashcards-tinder
 * CREATED:   2018-01-12T17:25:32
 * MODIFIED:  2018-01-13T11:58:00
 * VERSION:   0.0.2
 * ABOUT:     Handles Passport functionality
 * AUTHORS:   Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:    
 *********************************************************************************/

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config//keys');
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID:     keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL:  keys.googleCallbackURL,
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(
        (existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User(
              {
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.image.url
              }
            ).save().then(
              (newUser) => {
                done(null, newUser);
              }
            );
          }
        }
      )
    }
  )
);

passport.serializeUser(
  (user, done) => {
    done(null, user.id);
  }
);

passport.deserializeUser(
  (id, done) => {
    User.findById(id).then(
      user => {
        done(null, user);
      }
    );
  }
);
