/* Module dependencies. */

var WebSocket = require('ws');
var ws = new WebSocket('wss://s1.ripple.com:443/');
var bitstamp = "rhgovzKYmuVaRB6xnVxGL4mGi6skxA31FN";
var account = bitstamp;
var info_subscribe={
    id: 2,
    strict: true,
    ledger_index: "validated",
	command: "account_info",
	account: 'r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59'
};
 
ws.on('open', function() {
    ws.send(JSON.stringify(info_subscribe));
});
 
ws.on('message', function(data, flags) {
    //console.log(flags);
    console.log(data);
});