var Client = require('node-rest-client').Client;
 
var client = new Client();

var args= {
	headers: {"CK":"PK0H4X3ZSPWG0SS9XW"}
};
// direct way 
client.get("http://iot.cht.com.tw/iot/v1/device", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});
 

// registering remote methods 
client.registerMethod("jsonMethod", "http://iot.cht.com.tw/iot/v1/device", "GET");
 
client.methods.jsonMethod(args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});