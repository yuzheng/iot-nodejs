var Client = require('node-rest-client').Client;
 
var client = new Client();

var args= {
	path: {"deviceId":281932011},
	data: [
		{  
	        "id": "temperature",  
	        "value": [  
	            "22.2"
	        ]  
    	},
    	{  
	        "id": "humidity",  
	        "value": [  
	            "33"
	        ]  
    	}
    ],
	headers: {"CK":"PK0H4X3ZSPWG0SS9XW"}
};

// direct way 
client.post("http://iot.cht.com.tw/iot/v1/device/${deviceId}/rawdata", args, function (data, response) {
    // parsed response body as js object 
    //console.log(data);
    // raw response 
    //console.log(response);
}).on('error', function (err) {
    console.log('something went wrong on the request', err.request.options);
});
 

// registering remote methods 
client.registerMethod("postMethod", "http://iot.cht.com.tw/iot/v1/device/${deviceId}/rawdata", "GET");
 
client.methods.postMethod(args, function (data, response) {
    // parsed response body as js object 
    //console.log(data);
    // raw response 
    //console.log(response);
});

// handling client error events 
client.on('error', function (err) {
    console.error('Something went wrong on the client', err);
});