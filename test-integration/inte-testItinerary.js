/**
 * Created by user on 01/02/17.
 */
var chai = require('chai');
var expect = chai.expect;
var directionDriver = require('../components/directions/itinerary_calculator').directionDriver;
var bestwayFinder = require('../components/bestWay/bestway.js').bestwayFinder;
var request = require("request");

var url = "http://daredeville.herokuapp.com/api/v1";

describe('Itinerary', function() {

    describe('Test GET /itinerary route', function(){
        it('returns status 200', function(done){
            request(url+"/itinerary", function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('Test GET /itinerary/mall route', function(){
        it('returns status 200', function(done){
            request(url+"/itinerary/mall", function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('returns the error "no mall undefined"', function(done){
            request(url+"/itinerary/mall", function(error, response, body) {
                var expected = {error : "no mall named undefined"};
                expect(JSON.parse(body)).to.deep.equal(expected);
                done();
            });
        });

        it('returns the error "no mall inexistant"', function(done){
            var mallRequest = "inexistant";
            request(url+"/itinerary/mall?mall="+mallRequest, function(error, response, body) {
                var expected = {error : "no mall named "+mallRequest};
                expect(JSON.parse(body)).to.deep.equal(expected);
                done();
            });
        });

        it('returns the error "no magazin named undefined"', function(done){
            var mallRequest = "polygoneRiviera";
            request(url+"/itinerary/mall?mall="+mallRequest, function(error, response, body) {
                var expected = {error : "no magazin named undefined in mall : " + mallRequest};
                expect(JSON.parse(body)).to.deep.equal(expected);
                done();
            });
        });

        it('returns the error "no magazin named inexistant"', function(done){
            var mallRequest = "polygoneRiviera";
            var shopRequest = "inexistant";
            request(url+"/itinerary/mall?mall="+mallRequest+"&magazin="+shopRequest, function(error, response, body) {
                var expected = {error : "no magazin named "+shopRequest+" in mall : " + mallRequest};
                expect(JSON.parse(body)).to.deep.equal(expected);
                done();
            });
        });

        it('doesn\'t returns an error', function(done){
            var mallRequest = "polygoneRiviera";
            var shopRequest = "Atol";
            request(url+"/itinerary/mall?mall="+mallRequest+"&magazin="+shopRequest, function(error, response, body) {
                body = JSON.parse(body);
                expect(body.erro).to.be.undefined;
                done();
            });
        });
    });
});
