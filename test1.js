var WebSocket = require('ws');
var ws = new WebSocket('wss://s1.ripple.com:443/');
var info_subscribe={
  command: "subscribe",
  accounts: ["rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B_force_error"]
};
 
ws.on('open', function() {
    ws.send(JSON.stringify(info_subscribe));
});
 
ws.on('message', function(data, flags) {
    console.log(data);
    if (JSON.parse(data).error != null) {
    	console.log('Error in the connection: ' + JSON.parse(data).error);
    	console.log('Resend connection');
    	ws.send(JSON.stringify(info_subscribe));
    };
});