const app = require('../../express');
const userModel = require('../models/user/user.model.server.js');

app.get('/api/user', findAllUsers);


function findAllUsers(req, res) {
    userModel
        .findAllUsers()
        .then(function (user) {
            res.json(user)
        },function (err) {
            res.send(err)
        })
}