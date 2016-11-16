/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  16/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var transporter = require('./transporter').transporter;
var Promise = require('promise');
var Mailgun = require('mailgun-js');

function sendMailFct(fromName, toName, toAdress, latitude, longitude) {
    return new Promise(function(resolve, reject) {
        var mailgun = new Mailgun({apiKey: process.env.MAILER_API_KEY, domain: process.env.MAILER_DOMAIN});
        var htmlContent = '<h1>'+fromName+' demande votre aide</h1>' +
            '<p>'+toName+', venez me chercher s\'il vous plait, je suis actuellement à la position :</p>' +
            '<p>Latitude : '+latitude+'</p>' +
            '<p>Longitude : '+longitude+'</p>' +
            '</br>' +
            'Lien google map de la position : https://www.google.fr/maps/place/500+Avenue+Saint-Philippe,+06410+Biot/';

        var mailOptions = {
            from: 'mailgun@sandbox6383247dee374ece891e551a7dc0b894.mailgun.org',
            to: toAdress,
            subject: '[SOS] Daredeville',
            html: htmlContent
        };
        console.log("send messages");
        mailgun.messages().send(mailOptions, function(err, body) {
            if (err) {
                console.log("reject");
                console.log(err);
                reject(err)
            } else {
                console.log("resolve");
                resolve(body);
            }
        });
    })
}

var mailer = {
    sendMail: sendMailFct
};
exports.mailer = mailer;