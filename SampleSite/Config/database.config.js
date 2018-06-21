var mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://admin:admin@cluster0-nhwp3.mongodb.net/sampletable?retryWrites=true ')

    .then(() => {

        console.log("DB connected")

    }, err => {

        console.log("DB error")

    }

    );