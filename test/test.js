var chai = require('chai');
var expect = chai.expect;
var directionDriver = require('../components/directions/itinerary_calculator').directionDriver;

describe('Itinerary', function() {
    it('Direction driver', function() {
        directionDriver.getItinerary().then(function(data){
            expect(data.status).to.equal("OK");
        });
    });
});