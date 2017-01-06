var express = require('express');
var router = express.Router();

var Position = require('../model/models').Position;
var User = require('../model/models').User;

var jsonfile = require('jsonfile');

var file = 'sorry.json';
router.post('/', function (req, res, next) {

    console.log('Received position');
    /* Sorry for the following lines, but I would waste way too much time dealing with knex */
    position = req.body;
    jsonfile.readFile(file, function(err, obj) {
        position.date = Date.now();
        obj.push(position);
        jsonfile.writeFile(file, obj);
    });
    /* Sorry, again */
    res.json({"bloup":"bloup"});
});

router.get('/', function(req, res, next) {
    /* Sorry, sorry, sorry */
    jsonfile.readFile(file, function(err, obj) {
        res.json(obj);
    });
    /* :( :( :( :( :( */
});

module.exports = router;