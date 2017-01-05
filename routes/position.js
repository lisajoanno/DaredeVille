var express = require('express');
var router = express.Router();

var Position = require('../model/models').Position;
var User = require('../model/models').User;


router.post('/', function (req, res, next) {
    console.log('Received position');
    User.where({
        email: 'alexandre.cazala@gmail.com'
    }).select('id').then(function (a, b, c) {
        console.log('Result of select query:');
        console.log(a, b, c);
        Position.insertRow({
            user_id: 1,
            latitude: 16151651,
            longitude: 5464561
        }).then(function(a, b, c) {
            console.log("New position inserted for user something");
        })
    });
});