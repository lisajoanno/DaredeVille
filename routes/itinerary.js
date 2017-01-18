/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  03/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

// dependencies
var express = require('express');
var router = express.Router();
var directionDriver = require('../components/directions/itinerary_calculator').directionDriver;


/* GET itenerary listing. */
router.get('/', function(req, res, next) {
            
    directionDriver.getItinerary()
        .then(function(data) {

            res.json(data);
    })
});

router.get('/mall', function(req, res, next) {
	res.json(directionDriver.getMallItinerary());
});



module.exports = router;
