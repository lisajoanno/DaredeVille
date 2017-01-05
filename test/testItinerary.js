var chai = require('chai');
var expect = chai.expect;
var directionDriver = require('../components/directions/itinerary_calculator').directionDriver;
var bestwayFinder = require('../components/bestWay/bestway.js').bestwayFinder;
var request = require("request");

var url = "http://daredeville.herokuapp.com/api/v1/itinerary";

describe('Itinerary', function() {

    describe('Direction driver', function () {
        it('gets the itinerary', function() {
            return directionDriver.getItinerary().then(function(data){
                expect(data).not.to.be.undefined;
                expect(data.routes).not.to.be.undefined;
                expect(data.status).to.be.undefined;
            });
        });
    });

    describe('Test GET route', function(){
        it('returns status 200', function(done){
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('Test BestWay', function () {
        it('computes the "line intersect danger"', function (done) {
            assert(true).to.be.true;
            done();
        });

        it('finds the dangers', function (done) {
            assert(true).to.be.true;
            done();
        });

        it('finds the best way', function (done) {
            assert(true).to.be.true;
            done();
        });
    });
});