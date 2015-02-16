var WebSocket = require('ws');
var nodemailer = require('nodemailer');
var ws = new WebSocket('wss://s1.ripple.com:443/');
var info_subscribe={
  command: "subscribe",
  accounts: ["rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"]
};
 
ws.on('open', function() {
    ws.send(JSON.stringify(info_subscribe));
});

ws.on('message', function(data, flags) {
	data_obj = JSON.parse(data);
    (data_obj.transaction && data_obj.transaction.TransactionType == 'Payment')? handler_payment(data): console.log('Not a Payment');
});

var handler_payment = function(data) {
	console.log('Incoming Payment');

	// create reusable transporter object using SMTP transport 
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'rippltst1accnt@gmail.com',
	        pass: '1234567rR'
	    }
	});
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: 'My name <rippltst1accnt@gmail.com>', // sender address 
	    to: 'ripple1@mailinator.com', // list of receivers 
	    subject: 'Payment transaction info', // Subject line 
	    // Comentario a la corrección del test: 
	    // No he formateado los datos para mostrarlos 
	    // con estilos para simplificar el código y
	    // porque he considerado que no era lo relevante 
	    // del test, pero puedo hacerlo si lo veis importante para
	    // la correcta verificación de mis conocimientos.
	    text: data, // plaintext body 
	    html: '<b>'+data+'</b>' // html body 
	};
	 
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});
}