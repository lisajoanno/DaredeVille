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

        var mall = {
	  beacons: [
	    {
	      id: 1,
	      voisins: [
		{
		  id: 2,
		  direction: "ouest"
		}
	      ]
	    },
	    {
	      id: 2,
	      voisins: [
		{

		  id: 1,
		  direction: "est"
		},		
		{

		  id: 3,
		  direction: "ouest"
		},		
		{

		  id: 4,
		  direction: "sud"
		}
	      ]
	    },
	    {
	      id: 3,
	      voisins: [
		
		{

		  id: 2,
		  direction: "nord"
		},
		{
		  id: 4,
		  direction: "sud"
		}
	      ]
	    },
	    {
	      id: 4,
	      voisins: [
		{
		  id: 3,
		  direction: "nord"
		}
	      ]
	    }
	  ],
	  magazins: [
	    {
	      name: "celio",
	      beacon: 4
	    }
	  ],
	  entries: [
	    {
	      beacon: 1
	    }
	  ]
	};

	var magazinRequest = "celio";

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
