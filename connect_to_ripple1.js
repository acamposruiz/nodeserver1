/* Module dependencies. */

var WebSocket = require('ws');
var ws = new WebSocket('wss://s1.ripple.com:443/');
var bitstamp = "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B_data_error";
var account = bitstamp;
var info_subscribe={
  command: "subscribe",
  accounts: [bitstamp]
};
 
ws.on('open', function() {
    ws.send(JSON.stringify(info_subscribe), function ack(error) {
 		bitstamp = "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B";
 		info_subscribe={
 		  command: "subscribe",
 		  accounts: [bitstamp]
 		};
 		ws.send(JSON.stringify(info_subscribe));
	});
});
 
ws.on('message', function(data, flags) {
    //console.log(flags);
    console.log(data);
});