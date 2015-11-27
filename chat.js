var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var net = require('net');
//socket.io

var PORT = process.env.PORT;
//socket.io - fin
var client = new net.Socket();
client.connect(55210, 'localhost', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});

rl.on('line', function(dt){
	client.write(dt.toString());
});

console.log("Client TCP..."+PORT);
