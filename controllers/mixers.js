const express = require('express')
const Mixer = require('../models/Mixer.js')

const mixerRouter = express.Router()

// Routes
// get index route
mixerRouter.get('/', (req, res) => {
  Mixer.find().then((mixers) => {
    res.json(mixers);
  });
});

// get single mixer
mixerRouter.get('/:id', (req, res) => {
  Mixer.findById(req.params.id).then((mixer) => {
    res.json(mixer);
  });
});

// add a mixer
mixerRouter.post('/', (req, res) => {
  Mixer.create(req.body).then(() => {
    res.status(200).end();
  });
});

// edit a mixer
mixerRouter.put('/:id', (req, res) => {
  Mixer.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(200).status.end();
  });
});

// delete a mixer
mixerRouter.delete('/:id', (req, res) => {
  Mixer.findByIdAndDelete(req.params.id).then(() => {
    res.status(200).end();
  });
});


// Export router
module.exports = {
  mixerRouter
}
