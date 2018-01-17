/*
 * FILENAME: Card.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-13T18:24:54
 * MODIFIED: 2018-01-16T22:22:31
 * VERSION:  0.1.1
 * ABOUT:    Mongoose Card model
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, Wesley Harvey
 * NOTES: 
 *********************************************************************************/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  id: String,
  createdBy: String,
  createdOn: Date,
  modifiedBy: String,
  modifiedOn: Date,
  group: String,
  category: String,
  frontCard: {
    item: String
  },
  backcard: {
    definition: String,
    syntax: String,
    example: String
  }
});

mongoose.model('cards', cardSchema);
