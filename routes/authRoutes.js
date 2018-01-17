/*
 * FILENAME: routes/authRoutes.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-12T17:24:26
 * MODIFIED: 2018-01-14T20:41:11
 * VERSION:  0.0.6
 * ABOUT:    Sets up oauth routes
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, Wesley Harvey
 * NOTES:   
 *********************************************************************************/

const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/',
    (req, res) => {
      if (req.user)
        res.status(200).redirect('/HomePageLayout');
      else
        res.status(200).redirect('/HomePageLayout');
    });

  app.get('/api/login', (req, res) => {
    if (!req.user)
      res.redirect('/auth/google')
    else
      res.status(200).send({"logged_in_user": req.user});
  });

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
        res.send("No current user");
    }
  );

  app.get(
    '/api/logout', (req, res) => {
      req.logout();
      res.send({ "Bye": "From Server" });
    }
  );
}
