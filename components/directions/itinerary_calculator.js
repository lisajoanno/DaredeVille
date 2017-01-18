/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  03/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var client = require('./connection').googleMapsClient;
var bestwayFinder = require('../bestWay/bestway').bestwayFinder;
var converter = require('../converters/gm_directions_to_daredeville_itinerary').converter;
var Promise = require('promise');

function getItinerary() {
    return new Promise(function (resolve, reject) {
        client.directions({
            origin: "Gare de Nice-Ville, 12 Avenue Thiers, 06000 Nice",
            destination: {
                lat: 43.701950, 
                lng: 7.280609
            },
            alternatives:true,
            mode: "walking"
        }, function (err, data) {
            if (!err) {
                var json = converter.convert(data.json);
                var txt = bestwayFinder.findBestway(json);
                if(txt == undefined) resolve(txt);
                else resolve(json);
            } else {
                console.log(err);
                reject(err)
            }
        });
    })
}


function getMallItinerary() {

        var mall = { beacons : [{ id : 1, voisins : [{ id : 2, direction : "left"}]},{ id : 2, voisins : [{ id : 3, direction : "right"}]}, { id : 3, voisins : [{ id : 4, direction : "forward"}]}], magazins : [{name : "celio", beacon : 4}], entries : [{beacon : 1}] };

	var magazinRequest = "celio";

	for(var i = 0 ; i < mall.magazins.length ; i++)
	{
		if(mall.magazins[i].name == magazinRequest)
		{
			var beaconsList = [{beacon : 1, direction: null}, {beacon : 2, direction: "left"}, {beacon : 3, direction: "right"}, {beacon : 4, direction: "forward"}];
			return beaconsList;
		}
	}
}

var directionDriver = {
    getItinerary: getItinerary,
    getMallItinerary: getMallItinerary
};


exports.directionDriver = directionDriver;
