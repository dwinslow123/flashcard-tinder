/*
 * FILENAME: prod.js
 * PROJECT:  flashcards-tinder
 * CREATED:  2018-01-12T17:18:20
 * MODIFIED: 2018-01-12T17:18:26
 * VERSION:  0.0.1
 * ABOUT:    Returns production config keys
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:    Okay to commit
 *********************************************************************************/

module.exports = {
  googleClientID:     process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackURL:  process.env.GOOGLE_CALLBACK_URL,
  mongoURI:           process.env.MONGODB_URI,
  cookieKey:          process.env.COOKIE_KEY,
}
