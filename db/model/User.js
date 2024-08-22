const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String,
        required: true},
    age : {type: Number},
    email: {type: String,
        required: true},
    

})

const User = mongoose.model('User', schema);

module.exports = User
