var net = require('net');
var strftime = require('strftime');

var server = net.createServer(socketHandler);

function socketHandler(socket) {
    socket.end(strftime('%F %H:%M', new Date()) + "\n");
}

server.listen(process.argv[2]);