var http = require('http');
var url = require('url');

var server = http.createServer(serverHandler);

function serverHandler(req, res) {
    if (req.method == "GET") {
        var reqUrl = url.parse(req.url, true);
        var date = new Date(reqUrl.query.iso);

        if (reqUrl.pathname == "/api/parsetime") {
            date = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        }

        if (reqUrl.pathname == "/api/unixtime") {
            date = {
                unixtime: date.getTime()
            };
        }

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(date));

    }
}

server.listen(process.argv[2]);