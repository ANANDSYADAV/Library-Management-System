const mongoose = require('mongoose');

const AuthorModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    description: {
        type: Number,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Author', AuthorModel);