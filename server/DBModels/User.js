const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    enrollment: {
        type: String,
        required: true
    },
    registration: {
        type: Number,
        required: true
    },
    department: {
        type: String,

    },
    year: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    booksBorrowed: {
        type: Array,
        required: true,
        default: []
    }
})

module.exports = mongoose.model("User", userSchema);