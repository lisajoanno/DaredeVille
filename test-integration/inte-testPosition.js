/**
 * Created by user on 02/02/17.
 */
var chai = require('chai');
var expect = chai.expect;
var directionDriver = require('../components/directions/itinerary_calculator').directionDriver;
var bestwayFinder = require('../components/bestWay/bestway.js').bestwayFinder;
var request = require("request");

var url = "http://daredeville.herokuapp.com/api/v1";

describe('Position', function() {

    describe('Test GET /position route', function(){
        it('returns status 200', function(done){
            request(url+"/position", function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

});
