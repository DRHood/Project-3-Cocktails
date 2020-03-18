const mongoose = require('./connection.js')

const Mixer = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model('Mixer', Mixer);
