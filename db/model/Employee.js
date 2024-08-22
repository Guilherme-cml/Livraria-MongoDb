const mongoose = require('mongoose');

const schema = mongoose.Schema({
   name: {type: String,
        required: true},
    age : {type: Number},
    email: {type: String,
        required: true},
    salary: {type: Number,
        required: true},
    department: {type: String,
        required: true},
})

const Employee = mongoose.model('Employee', schema);

module.exports = Employee