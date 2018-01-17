/*
 * FILENAME: routes/cardsRoutes.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-12T17:24:26
 * MODIFIED: 2018-01-13T18:23:03
 * VERSION:  0.0.2
 * ABOUT:    Sets up cards routes
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, Wesley Harvey
 * NOTES:   
 *********************************************************************************/

const mongoose = require('mongoose');
const Card = mongoose.model('cards');

module.exports = (app) => {

  app.post('/api/cards', (req, res) => {
    const { _id, frontCard, backCard } = req.body;
    const card = new Card({_id, frontCard, backCard});
    card.save((err, newCard) => {
      if (err) return res.send(err);
      res.json(newCard)
    });
  });

  app.get('/api/cards', (req, res) => {
    console.log('Hello from app.get /api/cards route!');
    Card.find({}, (err, card) => {
      console.log("Cards Array", card);
      if (err) return res.send(err);
      res.send(card);
    });
  });

}
