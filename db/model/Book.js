const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {type: String,
        required: true},
    author: {type: String,
        required: true},
    year: {type: Number,
        required: true},
    pages: {type: Number,
        required: true},
    price: {type: Number,
        required: true},
    quantity: {type: Number,
        required: true},
})

const Book = mongoose.model('Book', schema);

module.exports = Book