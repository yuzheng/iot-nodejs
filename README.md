# iot-nodejs

> 提供 CHT IoT 平台 RESTful 與 MQTT 範例程式

## Setup

### 使用 node-rest-client

https://www.npmjs.com/package/node-rest-client

```
 $ npm install node-rest-client
```

提供範例：
- iot-rest.js (取得專案所有設備列表)
- iot-post-rawdata.js (新增設備感測數據)
- iot-get-rawdata.js (取得設備最新感測數據)

### 使用 mqtt

https://www.npmjs.com/package/mqtt 
```
 $ npm install mqtt --save -g
```

提供範例：
- iot-mqtt.js (訂閱設備感測數據異動)
- iot-mqtt-publish.js (新增設備感測數據)

協定參考：
https://iot.cht.com.tw/iot/doc/api
