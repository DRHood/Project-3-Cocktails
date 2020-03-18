const express = require('express')
const Spirit = require('../models/Spirit.js')

const spiritRouter = express.Router()

// Routes
// get index route
spiritRouter.get('/', (req, res) => {
  Spirit.find().then((spirits) => {
    res.json(spirits);
  });
});

// get single spirit
spiritRouter.get('/:id', (req, res) => {
  Spirit.findById(req.params.id).then((spirit) => {
    res.json(spirit);
  });
});

// add a spirit
spiritRouter.post('/', (req, res) => {
  Spirit.create(req.body).then(() => {
    res.status(200).end();
  });
});

// edit a spirit
spiritRouter.put('/:id', (req, res) => {
  Spirit.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(200).status.end();
  });
});

// delete a spirit
spiritRouter.delete('/:id', (req, res) => {
  Spirit.findByIdAndDelete(req.params.id).then(() => {
    res.status(200).end();
  });
});


// Export router
module.exports = {
  spiritRouter
}
