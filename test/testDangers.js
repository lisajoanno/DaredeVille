var chai = require('chai');
var expect = chai.expect;
var request = require("request");
var mockDb = require('mock-knex');
var db = require('../model/connection').knex;

var url = "http://daredeville.herokuapp.com/api/v1/dangers";

describe('Dangers', function () {

    describe('Test GET dangers route', function () {
        it('returns status 200', function (done) {
            mockDb.mock(db);

            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                //expect(true).to.be.true;
            });

            mockDb.unmock(db);
        })
    });

});