var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    firstName: String,

    lastName: String,

    from: Date,

    to: Date,

    email: String,

    gender: String,

    age: Number

});


module.exports = mongoose.model('Consumer', userSchema);