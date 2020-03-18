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
cocktailRouter.get('/:id', (req, res) => {
  Cocktail.findById(req.params.id).then((cocktail) => {
    res.json(cocktail);
  });
});

// add a cocktail
cocktailRouter.post('/', (req, res) => {
  Cocktail.create(req.body).then(() => {
    res.status(200).end();
  });
});

// edit a cocktail
cocktailRouter.put('/:id', (req, res) => {
  Cocktail.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(200).status.end();
  });
});

cocktailRouter.delete('/:id', (req, res) => {
  Cocktail.findByIdAndDelete(req.params.id).then(() => {
    res.status(200).end();
  });
});


// Export router
module.exports = {
  cocktailRouter
}
