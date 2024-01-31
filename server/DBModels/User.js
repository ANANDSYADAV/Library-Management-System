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
    Department: {
        type: String,

    },
    Year: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model("User", userSchema);