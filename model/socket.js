/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  17/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var mysql      = require('mysql');
var database_configuration = require('../configurations/database_conf');

var client = mysql.createClient({
    user : database_configuration.user,
    password : database_configuration.password,
    host: database_configuration.host,
    port: database_configuration.port,
    _socket: '/var/run/mysqld/mysqld.sock'
});
