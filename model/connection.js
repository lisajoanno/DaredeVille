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
        host     : 'sql11.freemysqlhosting.net',
        user     : 'sql11156849',
        password : 'KZWqQN94C6',
        database : 'sql11156849'
    }
});

exports.knex = knex;
