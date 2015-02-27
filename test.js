var http 	 = require('http'),
	socketio = require('socket.io'),
	redis = require("redis");


var app = http.createServer(function(req, res){
	console.log('receive request');
}).listen(8080, function(){
	console.log('listen on 8080');
});
var io = socketio(app);
//io.on()
io.sockets.on('connection', function (socket) {
	console.info('connect');
	//socket.emit('start');
    /*
	socket.on('message', function(msg){
		//socket.broadcast.emit('message', info);
		console.info('receive', msg);
		socket.send(msg);
	});
	*/
	socket.on('join', function(uid) {
		var unid = 'user_' + uid;
		//socket.join(unid);
    	client = redis.createClient();
    	//client.subscribe(unid);
        client.subscribe(unid);
    	client.on('message', function(channel, message){
	        console.log("channel " + channel + ": " + message);
	        socket.send(message);
	    });
	});

	socket.on('disconnect', function(msg){
		console.info('disconnect');
        client.unsubscribe();
		//console.log(socket);
		//console.info('id', socket.id);
		//socket.leave('');
	});

});


