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
router.get('/', function(req, res) {
    var origin = req.query.origin;
    var destination = req.query.destination;

    console.log(origin);
    console.log(destination);
    if(origin == undefined)
	origin = "Gare de Nice-Ville, 12 Avenue Thiers, 06000 Nice";
    if(destination == undefined)
	destination = {
                lat: 43.701950, 
                lng: 7.280609
            };

    var magazin = req.query.magazin;
    directionDriver.getItinerary(origin, destination)
        .then(function(data) {

	    if(magazin != undefined)
		data.beacons = directionDriver.getMallItinerary("mall1", magazin);

            res.json(data);
    })
});

router.get('/mall', function(req, res) {
	var mall = req.query.mall;
	var magazin = req.query.magazin;
	res.json(directionDriver.getMallItinerary(mall, magazin));
});



module.exports = router;
