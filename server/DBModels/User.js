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
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("User", userSchema);