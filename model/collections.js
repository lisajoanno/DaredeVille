/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  27/10/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
var knex = require('./connection').knex;

var Bookshelf = require('bookshelf')(knex);
var Danger = require('./models').Danger;
var Dangers = Bookshelf.Collection.extend({
    model: Danger
});

exports.Dangers = Dangers;