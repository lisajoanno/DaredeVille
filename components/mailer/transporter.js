/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  16/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
var nodemailer = require ('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var auth = {
    auth: {
        user: process.env.MAILER_API_KEY,
        pass: process.env.MAILER_DOMAIN
    }
};

var transporter = nodemailer.createTransport(mg(auth));

exports.transporter = transporter;
