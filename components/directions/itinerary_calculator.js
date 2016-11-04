/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  03/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var client = require('./connection').googleMapsClient;
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
            }
        }, function (err, data) {
            if (!err) {
                resolve(data.json)
            } else {
                reject(err)
            }
        });
    })
}

var directionDriver = {
    getItinerary: getItinerary
};


exports.directionDriver = directionDriver;