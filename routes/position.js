var express = require('express');
var router = express.Router();

var Position = require('../model/models').Position;
var User = require('../model/models').User;


router.post('/', function (req, res, next) {
    console.log('Received position');


    var body = [];
    req.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        // at this point, `body` has the entire request body stored in it as a string
        console.log(body);

    });


    /*User.where({
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
    });*/
    res.json({"bloup":"bloup"});
});

module.exports = router;