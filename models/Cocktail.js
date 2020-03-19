const mongoose = require('./connection.js')

const Cocktail = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    glass: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    ingredients: {
        type: [],
        required: false,
    },
    recipe: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model('Cocktail', Cocktail);
