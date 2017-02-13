var mqtt = require('mqtt');

var args= {
	username: "PK0H4X3ZSPWG0SS9XW",
	password: "PK0H4X3ZSPWG0SS9XW"
};

var client  = mqtt.connect('tcp://iot.cht.com.tw:1883',args);

var topic = "/v1/device/281932011/sensor/temperature/rawdata";
 
client.on('connect', function () {
  console.log("connected!");
  client.subscribe(topic);
  //client.publish('presence', 'Hello mqtt');
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  //client.end();
})