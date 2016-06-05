var http = require('http');
var map = require('through2-map');

var server = http.createServer(responseHandler);

function responseHandler(req, res) {
    if (req.method == 'POST') {
        req.pipe(map(function (c) {
            return c.toString().toUpperCase();
        })).pipe(res);
    }
}

server.listen(process.argv[2]);