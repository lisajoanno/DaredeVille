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
            var center = {longitude:43.615828,latitude:7.072732};
            var radius = 0.0001;
            var pointA = {lng:43.616007,lat:7.073011};
            var pointB = {lng:43.616271,lat:7.072947};
            var result = bestwayFinder.lineIntersectDanger(center, radius, pointA, pointB);
            expect(result).to.be.false;

            center = {longitude:43.615828,latitude:7.072732};
            radius = 0.0001;
            pointA = {lng:43.616007,lat:7.073011};
            pointB = {lng:43.615586,lat:7.072391};
            result = bestwayFinder.lineIntersectDanger(center, radius, pointA, pointB);
            expect(result).to.be.true;

            done();
        });

        it('finds the dangers', function (done) {
            expect(true).to.be.true;
            done();
        });

        it('finds the best way', function (done) {
            expect(true).to.be.true;
            done();
        });
    });
});