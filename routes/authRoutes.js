/*
 * FILENAME: routes/authRoutes.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-12T17:24:26
 * MODIFIED: 2018-01-17T06:56:41
 * VERSION:  0.1.0
 * ABOUT:    Sets up oauth routes
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, Wesley Harvey
 * NOTES:   
 *********************************************************************************/

const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate(
      'google', { scope: ['profile', 'email'] }
    )
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get(
    '/api/current_user', (req, res) => {
      if (req.user)
        res.send(req.user);
      else
        // res.send("No current user");
        res.send(req.user);
    }
  );

  app.get(
    '/api/logout', (req, res) => {
      req.logout();
      res.redirect('/');
      // res.send({ "Bye": "From Server" });
    }
  );
}
