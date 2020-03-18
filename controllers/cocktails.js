const express = require('express')
const Cocktail = require('../models/Cocktail.js')

const cocktailRouter = express.Router()

// Routes
// get index route
cocktailRouter.get('/', (req, res) => {
  Cocktail.find().then((cocktails) => {
    res.json(cocktails);
  });
});

// get single cocktail
creatureRouter.get('/:id', (req, res) => {
  Cocktail.findById(req.params.id).then((cocktail) => {
    res.json(cocktail);
  });
});

// add a cocktail
creatureRouter.post('/', (req, res) => {
  Cocktail.create(req.body).then(() => {
    res.status(200).end();
  });
});

// Export router
module.exports = {
  cocktailRouter
}
