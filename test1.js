var WebSocket = require('ws');
var ws = new WebSocket('wss://s1.ripple.com:443/');
var info_subscribe={
  command: "subscribe",
  accounts: ["rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B_data_error"]
};
 
ws.on('open', function() {
    ws.send(JSON.stringify(info_subscribe), function(error) {
 		ws.send(JSON.stringify({
 		  command: "subscribe",
 		  accounts: ["rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"]
 		}));
	});
});
 
ws.on('message', function(data, flags) {
    console.log(data);
});