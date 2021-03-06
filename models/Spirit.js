const mongoose = require('./connection.js')

const Spirit = new mongoose.Schema({
    typeOf: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model('Spirit', Spirit);