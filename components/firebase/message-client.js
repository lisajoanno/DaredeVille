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
            'Content-Type': ' application/json',
            'Authorization': 'key=AI...8o'
        },
        body: JSON.stringify(
            {
                "data": {
                    "message": message
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
function setToken(username, token) {
    user[username] = token;
}
module.exports = {
    sendMessageToUserName: sendMessageToUserName,
    sendMessageToUserToken: sendMessageToUserToken,
    setToken: setToken
};