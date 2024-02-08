const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    yearPublished: {
        type: Number,
        required: true
    },
    isIssued: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: false
    },
    coverPage: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    Language: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Book", bookSchema);