/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  04/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
var Promise = require('promise');

var directionsToDardevilleConverter = {
    convert: convertDirectionsToDarDeVille
}

function convertDirectionsToDarDeVille (directionsOutput) {
    return new Promise(function(resolve, reject) {
        var darDeVilleFormat = {

        }
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