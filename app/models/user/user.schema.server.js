
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    number: String
},{collection : 'user'});

module.exports = userSchema;
