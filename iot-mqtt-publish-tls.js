var mqtt = require('mqtt');

var args= {
	username: "PK0H4X3ZSPWG0SS9XW",
	password: "PK0H4X3ZSPWG0SS9XW"
};

//var client  = mqtt.connect('tls://iot.cht.com.tw:8883',args);
var client  = mqtt.connect('mqtts://iot.cht.com.tw',args);

var topic = "/v1/device/281932011/rawdata";
 
client.on('connect', function () {
  console.log("connected!");
  client.subscribe("/v1/device/281932011/sensor/temperature/rawdata");
  client.subscribe("/v1/device/281932011/sensor/humidity/rawdata");
  var rawdata = [
		{  
	        "id": "temperature",  
	        "value": [  
	            "24.2"
	        ]  
    	},
    	{  
	        "id": "humidity",  
	        "value": [  
	            "51"
	        ]  
    	}
    ];
  client.publish(topic, JSON.stringify(rawdata));
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  //client.end();
})