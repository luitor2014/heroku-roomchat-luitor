 var net = require('net');
 var portS = process.env.PORT;
 var io = require('socket.io').listen(portS);
//Keep track of connections
var count = 0;

var server = net.createServer(function (connection) {
    connection.setEncoding('utf8');
    connection.write(
        '\n > welcome to \033[92mnode-chat\033[39m!' +
        '\n > ' +count+ ' other people are connected at this time.' +
        '\n > please write your name and press enter: '
    );
    count++;
    connection.on('data', function (data) {
       console.log(data);
    });

    connection.on('close', function (error) {
        console.log('Error: ' + error);
        count--;
    });
});

var port = process.env.PORT || 1337;

server.listen(port, function () {
    console.log('\033[90m   server listening on *:' + port + '\033[39m');
     console.log('portSocket: '+portS);
});

io.on('connection',function(socket){
	console.log("Conectado socket.io");
	//io.sockets.emit("message_res", "Hola desde el servidor TCP");
	//socket.emit("message_res", "Hola desde el servidor TCP");
	//socket.broadcast.emit("message_res", "Hola desde el servidor TCP");
	socket.on('message_req', function(dt){
		//client.write(dt);
		//socket.emit("message_res", "Hola desde el servidor TCP");
        //socket.broadcast.emit("message_res", "Hola desde el servidor TCP");
    });
});
setInterval(function(){
  console.log("Escuchando...");
},4000);
