/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  27/01/17                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
var firebaseClient = require('../components/firebase/message-client');

/*
EXEMPLE DE MESSAGE ENVOYE :
{
    username: "Nicolas",
    token: "xxxxxx"
}
 */
function register(req, res) {
    console.log("FIREBASE CONTROLLER");
    firebaseClient.setToken(req.body.username, req.body.token);
    res.json({error:false, data: "OK"});
}

module.exports= {
    register: register
};