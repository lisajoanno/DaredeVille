var request = require('request');
var users = {};
// Identifiant firebase
function sendMessageToUserName(username, message) {
    var deviceId = users[username];
    sendMessageToUserToken(deviceId, message);
}

function sendMessageToUserToken(deviceId, message) {
    request({
        url: 'https://fcm.googleapis.com/fcm/send',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'key=AAAAygu80S4:APA91bGFAoD1tY7ignFPr73R31TA4-2ou_AEGqWb1tfuT2ad-zWsalS4Wy4dARIUuQCN50OJWYFfzpEeSS1hn4LJBobSqbbudxJeQHkSryNywJw07picwBt59Y_CiLdaX7IAafUgYztAMJ-JDxXYwQp0nER_1NfQ7w'
        },
        body: JSON.stringify(
            {
                "notification": {
                    "title": 'Registered',
                    "body": 'You\'re now registered to daredeville'
                },
                "to": deviceId
            }
        )
    }, function (error, response, body) {
        if (error) {
            console.error(error, response, body);
        }
        else if (response.statusCode >= 400) {
            console.error('HTTP Error: ' + response.statusCode + ' - ' + response.statusMessage + '\n' + body);
        }
        else {
            console.log('Done!')
        }
    });
}

function sendMessageToEveryone(message) {
    for (var user in users) {
        sendMessageToUserName(user, message);
    }
}

function setToken(username, token) {
    users[username] = token;
    console.log("[FIREBASE] user "+username+" registered with token "+token);
    sendMessageToUserToken(token, "daredeville");
}
module.exports = {
    sendMessageToUserName: sendMessageToUserName,
    sendMessageToUserToken: sendMessageToUserToken,
    sendMessageToEveryone: sendMessageToEveryone,
    setToken: setToken
};