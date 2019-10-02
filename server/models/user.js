var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    password: {
        type: Number,
        required: true,
        default: 123
    }
});

module.exports = { User };