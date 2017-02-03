/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  02/02/17                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var markers = [];
var map;
var directionsDisplay;
var directionsService;
var colors = ["green", "blue", "red", "yellow", "purple"];
var start;
var end;
var dataInterval;
var positions = [];

function initMap() {
    directionsService = new google.maps.DirectionsService();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lng:7.072792053222656, lat:43.618182252818265}
    });
    map.addListener('click', function(event) {
        console.log("lng:"+ event.latLng.lng() + ", lat:"+event.latLng.lat());
    });
    directionsDisplay = new google.maps.DirectionsRenderer();
    // var chicago = new google.maps.LatLng(41.850033, -87.6500523);
    directionsDisplay.setMap(map);
    //calcRoute();
}

function calcRoute() {

    var request = {
        origin:start.position,
        destination:end.position,
        travelMode: google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            if (response.routes.length > 1) {
                response.routes[1] = response.routes[0];

            }

            console.log(response);
            directionsDisplay.setDirections(response);
        }
    });
}
function addMarker(location, title, label, colorToSet) {
    if (!colorToSet) {
        var color = colors[markers.length % colors.length];
    }
    var marker = new google.maps.Marker({
        position: location,
        title: title,
        label: label,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "http://maps.google.com/mapfiles/ms/icons/"+color+"-dot.png"
    });
    markers.push(marker);
}
function updatePosition(location, title, label) {
    var color = colors[markers.length];
    var test = 0;

    for (var i = 0; i < markers.length ; ++i) {
        if (markers[i].title == title) {
            markers[i].setPosition(location);
            return;
        }
    }
    console.log(markers);
    if (test == 0) {
        var marker = new google.maps.Marker({
            position: location,
            title: title,
            label: label,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: "http://maps.google.com/mapfiles/ms/icons/" + color + "-dot.png"
        });

        markers.push(marker);
    }
}
function updateDanger(location, title, label) {
    var color = colors[markers.length];
    for (var i = 0; i < markers.length ; ++i) {
        if (markers[i].title == title) {
            return;
        }
    }
    var marker = new google.maps.Marker({
        position: location,
        title: title,
        label: label,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "http://maps.google.com/mapfiles/ms/icons/"+color+"-dot.png"
    });
    markers.push(marker);
}
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}
// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}
function updatePositions() {
    $.get( "/api/v1/position", function( data ) {
        // data = data.reverse().slice(0, 5);
        // data.forEach(function(location) {
        //     updatePosition({lat:location.lat, lng:location.lng}, location.email, location.email);
        // });
        data = data.reverse().slice(0, 5);
        data.forEach(function(position) {
            updatePosition(pos, position.email, position.email);
            // console.log(position);
            // var pos = {lat: position.lat, lng: position.lng};
            // var date = new Date(position.date*1000);
            // addMarker(pos, position.email, position.email, "blue");
        })
    });
}
function position() {
    deleteMarkers();
    clearInterval(dataInterval);
    dataInterval = setInterval(updatePositions, 500);
}
function updateDangers() {
    $.get( "/api/v1/dangers", function( data ) {
        data.data.forEach(function(location) {
            updateDanger({lat:location.latitude, lng: location.longitude}, location.name, location.name);
        });
    });
}
function dangers() {
    deleteMarkers();
    clearInterval(dataInterval);
    dataInterval = setInterval(updateDangers, 5000);

}
function itinerary() {
    google.maps.event.clearListeners(map, 'rightclick');
    google.maps.event.clearListeners(map, 'click');
    clearInterval(dataInterval);
    map.addListener('rightclick', startListener);
    map.addListener('click', destListener);
    dangers();
    deleteMarkers();

}

function destListener(event) {
    if (end) {
        end.setPosition(event.latLng);
    } else {
        end = new google.maps.Marker({
            position: event.latLng,
            title: "Arrivée",
            label: "Arrivée",
            map: map
        });
    }
    if (start) {
        calcRoute();
    }
}

function startListener(event) {
    if (start) {
        start.setPosition(event.latLng);
    } else {
        start = new google.maps.Marker({
            position: event.latLng,
            title: "Départ",
            label: "Départ",
            map: map
        });
    }
    if (end) {
        calcRoute();
    }

}