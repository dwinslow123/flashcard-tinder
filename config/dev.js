/*
 * FILENAME: dev.js
 * PROJECT:  flashcards-tinder
 * CREATED:  2018-01-12T17:17:39
 * MODIFIED: 2018-01-12T17:17:43
 * VERSION:  0.0.1
 * ABOUT:    Returns development config keys
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:    Okay to commit
 *********************************************************************************/

module.exports = {
  googleClientID:     process.env.GOOGLE_DEV_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_DEV_CLIENT_SECRET,
  googleCallbackURL:  process.env.GOOGLE_DEV_CALLBACK_URL,
  mongoURI:           process.env.MONGODB_DEV_URI,
  cookieKey:          process.env.DEV_COOKIE_KEY,
}
