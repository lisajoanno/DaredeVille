/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  03/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var client = require('./connection').googleMapsClient;
var converter = require('../converters/gm_directions_to_dardeville_itinerary');
var Promise = require('promise');
function getItinerary() {
    return new Promise(function(resolve, reject) {
        client.directions({
            origin: {
                lat: 43.616217,
                lng: 7.074583
            },
            destination: {
                lat: 43.623448,
                lng: 7.061697
            },
            mode: "walking"
        }, function (err, data) {
            if (!err) {
                console.log("blabla");
                var txt = converter.convert(data.json);
                console.log(txt);
                resolve(txt)
            } else {
                console.log("balbal");
                reject(err)
            }
        });
    })
}

var directionDriver = {
    getItinerary: getItinerary
};


exports.directionDriver = directionDriver;