/*
 * FILENAME: User.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-12T17:26:37
 * MODIFIED: 2018-01-12T17:26:55
 * VERSION:  0.0.1
 * ABOUT:    Mongoose User model
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES: 
 *********************************************************************************/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String,
});

mongoose.model('users', userSchema);
