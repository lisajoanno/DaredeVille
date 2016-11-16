var chai = require('chai');
var expect = chai.expect;
var DirectionDriver = require('../components/directions/itinerary_calculator').directionDriver;

describe('Itinerary', function() {
    describe('Direction driver', function () {
        it('gets the itinerary', function() {
            DirectionDriver.getItinerary().then(function(data){
                expect(data.status).to.equal("AHEUAHOHU");
            });
        });
    });
});