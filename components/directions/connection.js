
var googleMapsClient = require('@google/maps').createClient({
    key:  process.env.GOOGLE_MAPS_DIRECTION_API_KEY
});

exports.googleMapsClient = googleMapsClient;