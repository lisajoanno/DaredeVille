/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  16/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  03/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

// dependencies
var express = require('express');
var router = express.Router();
//var debug = require('debug')('DardeVilleServer:server');
var mailer = require("../components/mailer/mailer").mailer;

/* GET itinerary listing. */
//(fromName, toName, toAdress, latitude, longitude)
router.get('/', function(req, res, next) {

    var prom = mailer.sendMail("Le petit Nicolas", "Pierre massanès", "biblock05@gmx.fr", "49.614689", "7.071705").then(function(info, err){
        if (err) {
            console.log("PAS COOL");
            res.json(err);
        } else {
            console.log("YOOOOOOOOOOOOOOo");
            res.json("Votre mail va s'envoyer");

        }
    })


});

module.exports = router;
