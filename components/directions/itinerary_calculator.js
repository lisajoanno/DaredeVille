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
var jsonfile = require('jsonfile');

function getItinerary(origin, destination) {
    return new Promise(function (resolve, reject) {
        client.directions({
            origin: origin,
            destination: destination,
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


function getMallItinerary(mallRequest, magazinRequest) {

	var mall;

	try {
		mall = jsonfile.readFileSync("data/" + mallRequest + ".json");
	} catch(err) {
		return {error : "no mall named " + mallRequest};
	}

	console.log(mall);
	for(var i = 0 ; i < mall.magazins.length ; i++)
	{
		if(mall.magazins[i].name == magazinRequest)
		{
			var beaconsList = mall.beacons;
			var shortestWay = [];

			for(var j = 0 ; j < mall.entries.length ; j++)
			{
				var entry = mall.entries[j].beacon;
				var visited = [entry];


				var way = dijkstra(beaconsList, entry, mall.magazins[i].beacon, visited);

				var prevBeacon = mall.beacons[way[0]-1];



				var ret = [{beacon : prevBeacon.id, direction : null}];

				for(var k = 1 ; k < way.length ; k++)
				{
					for(var l = 0 ; l < prevBeacon.voisins.length ; l++)
					{
						var id = prevBeacon.voisins[l].id;
						if(id == way[k])
						{

							ret[ret.length] = [{beacon : id, direction : prevBeacon.voisins[l].direction}];
						
						
							prevBeacon = mall.beacons[id-1];
							continue;	
						}
					}
				}
				return ret;

			}
			return beaconsList;
		}

		return {error : "no magazin named " + magazinRequest + " in mall : " + mallRequest};
	}

}

function dijkstra(beaconsList, beacon, goal, visited)
{
	if(beacon == goal)
        {
		return [beacon];
	}

	var currentBestWay = undefined;

	for(var i = 0 ; i <beaconsList[beacon - 1].voisins.length ; i++)
	{
		var tempVisited = visited.slice();
		var newBeacon = beaconsList[beacon - 1 ].voisins[i].id;


		if(tempVisited.indexOf(newBeacon) >= 0) {
			continue;
		}

		tempVisited[tempVisited.length] = newBeacon;

		var res = dijkstra(beaconsList, newBeacon, goal, tempVisited);

		if( res != undefined)
		{
			if(currentBestWay == undefined || res.length < currentBestWay.length - 1)
				currentBestWay = [beacon].concat(res);
			
		}
	}
	return currentBestWay;
}

var directionDriver = {
    getItinerary: getItinerary,
    getMallItinerary: getMallItinerary
};


exports.directionDriver = directionDriver;
