/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  27/10/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
var knex = require('./connection').knex;
var Bookshelf = require('bookshelf')(knex);

var Danger = Bookshelf.Model.extend({
    tableName: 'dangers',

    hasTimeStamps: true,

    notifications: function() {
        return this.belongsToMany(Notification);
    }
});

var Notification= Bookshelf.Model.extend({
    tableName: 'notifications',
    notifier: function() {
        return this.belongsTo(User, 'user_id')
    }
});

var User = Bookshelf.Model.extend({
    tableName: 'user'
});

exports.Danger = Danger;
exports.Notification = Notification;
exports.User = User;