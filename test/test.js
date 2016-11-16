var chai = require('chai');
var expect = chai.expect;
var DirectionDriver = require('../components/directions/itinerary_calculator').directionDriver;
var request = require("request");

describe('Itinerary', function() {

    describe('Direction driver', function () {
        it('gets the itinerary', function() {
            return DirectionDriver.getItinerary().then(function(data){
                expect(data).not.to.be.undefined;
                expect(data.routes).not.to.be.undefined;
                expect(data.status).to.be.undefined;
            });
        });
    });

    describe('Test GET route', function(){

        var url = "http://daredeville.herokuapp.com:3000/itineraryaaaa";

        it('returns status 200', function(){
            request(url, function(error, response, body) {
                console.log("COUCOUCOUCOUCOU : "+response.statusCode);
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

});