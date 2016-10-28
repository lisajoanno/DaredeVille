/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  27/10/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var mysql      = require('mysql');
var database_configuration = require('../configurations/database_conf');
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : database_configuration.host,
        user     : database_configuration.user,
        password : database_configuration.password,
        database : database_configuration.database,
        charset  : 'utf8'
    }
});
exports.knex = knex;
