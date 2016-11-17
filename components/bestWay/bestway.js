/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Djo� DENNE             *
 * CREATION_DATE:  16/11/16                      *
 * EMAIL:          djoe.denne@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
var Promise = require('promise');
var async = require('async');

var bestwayFinder = {
    findBestway: findBestwayFct
};

/**
 * trouve la route avec le moins de danger
 * @param directions
 */
function  findBestwayFct(directions) {
    
    var bestway = undefined;
    var bestScore = 0;
    var score = 0;
    var i = 0;

    async.each(directions.routes, function(item, callback){
        i++;
        score = findDangers(item);
        console.log(i + " : score : " + score);

        if (score == 0) {
            callback(item);
        } else {
            if (bestScore > score)
                bestway = item;

            callback(null);
        }

    }, function(stoppedItem){
        if(stoppedItem) {
            bestway = stoppedItem;
        }
    });

    /* OLD FOR SYNCHRONE
    for (var i = 0; i < directions.routes.length ; i++) {
        var item = directions.routes[i];
        score = findDangers(item);
        console.log(i + " : score : " + score);

        if (score == 0)
            return item;
        if (bestScore > score)
            bestway = item;

    }*/


    return bestway;
}

function findDangers(route)
{
    var dangers = [{ name: "cratere de meteorite", latitude: 43.706581, longitude : 7.268872 }];
    var previousPoint = undefined;
    var nbIntersection = 0;

    async.each(route.legs[0].steps, function(item, callback){
        if (previousPoint == undefined)
            previousPoint = item.start_location;

        if (lineIntersectDanger(dangers[0], 0.0001, previousPoint, item.end_location))
            nbIntersection++;

        previousPoint = item.end_location;

        callback(null);
    });

    /* OLD FOR SYNCHRONE
    for (var i = 0; i < route.legs[0].steps.length ; i++) {
        var item = route.legs[0].steps[i];
        
        if (previousPoint == undefined)
            previousPoint = item.start_location;
        
        if (lineIntersectDanger(dangers[0], 0.0001, previousPoint, item.end_location))
            nbIntersection++;
        
        previousPoint = item.end_location;
    }*/

    return nbIntersection;
}

function lineIntersectDanger(center, radius, pointA, pointB) {
    var baX = pointB.lng - pointA.lng;
    var baY = pointB.lat - pointA.lat;
    var caX = center.longitude - pointA.lng;
    var caY = center.latitude - pointA.lat;
    
    var a = baX * baX + baY * baY;
    var bBy2 = baX * caX + baY * caY;
    var c = caX * caX + caY * caY - radius * radius;
    
    var pBy2 = bBy2 / a;
    var q = c / a;
    
    var disc = pBy2 * pBy2 - q;
    
    return disc >= 0;

}

exports.bestwayFinder = bestwayFinder;