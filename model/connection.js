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
        user     : 'sql11154421',
        password : '4IQfvAqgYS',
        database : 'sql11154421',
        //_socket: '/var/run/mysqld/mysqld.sock'
    }
});

exports.knex = knex;
