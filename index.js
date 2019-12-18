const keys = require('./keys');
var mqtt = require('mqtt');
var con = require('./db');
var sendSms = require('./send_sms');

var options = keys.options;
const client = mqtt.connect('mqtt://tailor.cloudmqtt.com', options);

con.connect((err) => {
    if(err) throw err;
    console.log("Database connected");
});

client.on('connect', () => {
    console.log("Connected...");
    client.subscribe('Data');
});

client.on('message', (topic, message) => {
    if(topic === 'Data'){  
        console.log(message.toString());
        var data = message.toString().split(',');
        console.log(data);
        sendSms(data);
    }
})
