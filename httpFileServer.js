var http = require('http');
var fs = require('fs');

var server = http.createServer(serverHandler);

function serverHandler(request, response) {
    console.log(response);
    fs.createReadStream(process.argv[3]).pipe(response);
}

server.listen(process.argv[2]);