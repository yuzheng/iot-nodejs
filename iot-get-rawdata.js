var Client = require('node-rest-client').Client;
 
var client = new Client();

var args= {
	path: {
		"deviceId":281932011,
		"sensorId":"temperature"
	},
	headers: {"CK":"PK0H4X3ZSPWG0SS9XW"}
};

// direct way  (http://, https://)
client.get("https://iot.cht.com.tw/iot/v1/device/${deviceId}/sensor/${sensorId}/rawdata", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
}).on('error', function (err) {
    console.log('something went wrong on the request', err.request.options);
});
 

// registering remote methods 
client.registerMethod("jsonMethod", "https://iot.cht.com.tw/iot/v1/device/${deviceId}/sensor/${sensorId}/rawdata", "GET");
 
client.methods.jsonMethod(args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});

// handling client error events 
client.on('error', function (err) {
    console.error('Something went wrong on the client', err);
});