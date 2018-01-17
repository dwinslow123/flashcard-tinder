/*
 * FILENAME:  initCards.js
 * PROJECT:   flashcards-tinder
 * CREATED:   2017-12-13T11:24:48
 * MODIFIED:  2018-01-16T21:26:37
 * VERSION:   0.1.0
 * ABOUT:     Read flashcards.json file and place into our Heroku Mongo
 	      Database after first deleting the current set of cards to
              easily allow a new collection to be inserted for a basic 
              change in schema.
 * AUTHORS:   Steven O'Campo, Dan Winslow, Latoyya Smith, Wesley Harvey
 * NOTES:    
 *********************************************************************************/

require('dotenv').config({path: '../.env'});
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const fs = require('fs');
const keys = require('../config/keys');

// FLASHCARDS_JSON
const FLASHCARDS_JSON = '../config/cards.json';

// MONGODB_URI
const MONGO_URI = keys.mongoURI;
const DISPLAYABLE_URI = MONGO_URI.replace(/:[^:]*@/, ':<PASSWORD>@');

// DATABASE AND COLLECTION
const DB_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION = 'flashcards';

// read flashcards as an array of objects
const flashcards = JSON.parse(fs.readFileSync(FLASHCARDS_JSON, 'utf8'));

// connect as a client
MongoClient.connect(MONGO_URI, function(err, client) {
  assert.equal(null, err);
  console.log(`\u001b[32mOpened\u001b[0m client connection to Mongo Server: \u001b[35m${DISPLAYABLE_URI}\u001b[0m`);

  // obtain references to database and collection objects
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION);

  // drop the collection before adding flashcards
  collection.drop(function() {
    console.log(`\u001b[31mDropped\u001b[0m the collection \u001b[35m${COLLECTION}\u001b[0m`);

    // now insert the documents into the collection;
    // send a callback to close the client connection
    insertDocuments(db, collection, function() {
      client.close();
      console.log('\u001b[31mClosed\u001b[0m client connection to Mongo Server');
    });
  });
});

const insertDocuments = function(db, collection, callback) {
  // insert creates the collection, inserts the documents, and
  // returns an object: 'result' with 3 fields
  // 'result', 'ops', 'connection'; just use the 'ops' field here
  collection.insertMany(flashcards, function(err, result) {
    assert.equal(err, null);
    console.log(`\u001b[32mInserted ${result.ops.length} documents\u001b[0m into the collection "${COLLECTION}"`);
    callback(result);
  });
}
