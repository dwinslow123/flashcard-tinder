/*
 * FILENAME: Card.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-13T18:24:54
 * MODIFIED: 2018-01-13T18:24:58
 * VERSION:  0.0.1
 * ABOUT:    Mongoose Card model
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, Wesley Harvey
 * NOTES: 
 *********************************************************************************/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  frontCard: String,
  backCard: String
});

mongoose.model('cards', cardSchema);
