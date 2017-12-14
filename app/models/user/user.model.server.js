
var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', UserSchema);


userModel.findAllUsers = findAllUsers;


module.exports = userModel;

var temUser = [
    {"name":"PS", "number":"6177857613"},
    { "name": "SS", "number" : "6178667976"},
    {"name": "BS", "number" : "6177922501"}
];


function findAllUsers(){
    return userModel
        .find()
        .populate('name')
        .populate('number');
}