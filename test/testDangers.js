var chai = require('chai');
var expect = chai.expect;
var request = require("request");

var url = "http://daredeville.herokuapp.com/api/v1/dangers";

describe('Dangers', function () {

    describe('Test GET dangers route', function () {
        it('returns status 200', function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        })
    });

});