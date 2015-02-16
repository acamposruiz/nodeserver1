/* Module dependencies. */

var WebSocket = require('ws');
var ws = new WebSocket('wss://s1.ripple.com:443/');
var accounts = ['r44MMw2oEbYFXSWxPukMyzoqUeBXRF6cNc', 'rLt5hnUwhTPfCNBmJFLb5jFNiKpUkyKi1h', 'rDwox1WpMccywnionzrWS3LL6dYoMznfGQ', 'rpexXbNan91Uuv9Quojo4H81JAKtVtqv5a', 'rsDqbur66KyE7bK8SiGVxJzw2ntwX5BWSz'];

var subscribe_function = function(accounts) {
	var info_subscribe={
	  command: "subscribe",
	  accounts: accounts
	};
    ws.send(JSON.stringify(info_subscribe));	
}
 
ws.on('open', function() {
	subscribe_function(accounts);
    console.log('Subscription is done!');
});
 
ws.on('message', function(data, flags) {
    console.log(data);
});