const https = require('https');

const keys = require('./keys');

const accountSid = keys.twilio.accountSid;
const authToken = keys.twilio.authToken;

const client = require('twilio')(accountSid, authToken);


function sendSms(alert) {

    

    client.messages
        .create({
            body: alert,
            from: '+13347593242',
            to: '+94711765356'
        })
        .then(message => console.log(message.sid));
}

module.exports.sendSms = sendSms;