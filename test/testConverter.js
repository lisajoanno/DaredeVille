/**
 * Created by user on 16/11/16.
 */

var chai = require('chai');
var expect = chai.expect;
var converter = require('../components/converters/gm_directions_to_daredeville_itinerary.js').converter;
var request = require("request");


describe('Converter test', function() {

    describe('Google Maps to Daredeville itinerary converter', function () {

        var routeExists = {"routes": [{"bounds": {"northeast": {"lat": 43.6233998,"lng": 7.074583},"southwest": {"lat": 43.616205,"lng": 7.0616572}}}]};
        var routeNotExists = {"status":"ok"};

        it('Simple converter', function() {
            expect (converter.convert(routeExists)).not.to.be.undefined;
            expect (converter.convert(routeExists).routes).not.to.be.undefined;
            expect (converter.convert(routeNotExists).routes).to.be.undefined;
        });
    });

});