/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  03/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var client = require('./connection').googleMapsClient;
var converter = require('../converters/gm_directions_to_dardeville_itinerary').converter;
var bestwayFinder = require('../bestWay/bestway').bestwayFinder;
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
                var json = converter.convert(data.json)
                var txt = bestwayFinder.findBestway(json);
                resolve(txt)
            } else {
                console.log(err);
                reject(err)
            }
        });
    })
}

var directionDriver = {
    getItinerary: getItinerary
};


exports.directionDriver = directionDriver;