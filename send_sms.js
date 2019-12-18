const keys = require('./keys');

const accountSid = keys.twilio.accountSid;
const authToken = keys.twilio.authToken;

const client = require('twilio')(accountSid, authToken);


sendSms =  (alert) => {
    client.messages
        .create({
            body: alert,
            from: '+12512209929',
            to: '+94772278461'
        })
        .then(message => console.log(message.sid));
}

module.exports = sendSms;