/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  27/10/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

// dependencies
var express = require('express');
var router = express.Router();
var Dangers = require('../model/collections').Dangers;
var Danger = require('../model/models').Danger;
var Notification = require('../model/models').Notification;
//var danger_queries = require('../model/prepared_queries');

function saveNotifications(notification) {

    return Notification.forge({
        user_id: "test",
        type: notification.type,
        danger_lvl: notification.danger_lvl
    }).save()
        .then(function (notification) {
            return notification.id;
        });
}

/* GET dangers listing. */
router.get('/', function(req, res) {
    Dangers.forge()
        .fetch()
        .then(function (collection) {
            res.json({error:false, data: collection.toJSON()});
        })
        .catch(function(err) {
            res.status(500).json({error: true, data: {message: err.message}});
        })
});

/* POST a new danger */
/* example : */
/*
 {
 "latitude": 43.60326743161359,
 "longitude": 7.048587799072266,
 "name": "terroriste",
 "notification": {
 "type": "MAIRIE",
 "danger_lvl": 1
 }
 }
 */
router.post('/', function(req, res) {
    console.log(req.body);
    if (!req.body.name) {
        req.body.name = "Notified_by_DareDeVille"
    }
    Danger.forge({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        name: req.body.name
    })
        .save()
        .then(function(danger) {
        // Danger successfully added
        // save notifications
        console.log("test#2");
            console.log(req.body);
        saveNotifications(req.body.notification)
            .then(function(id) {
                console.log(id);
                danger.load(['notifications'])
                    .then(function(model) {
                        model.notifications().attach(id);
                        res.json({error:false, data: {message: 'Notification saved'}});
                    })
                    .catch(function(err) {
                        res.status(500).json({error:true, data: {message: err.message}});
                    })
            })
            .catch(function(err) {
                res.status(500).json({error:true, data: {message: err.message}});
            })
    })
});

module.exports = router;
