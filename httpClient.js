var http = require('http');

http.get(process.argv[2], responseHandler);

function responseHandler(response){
    response.setEncoding('utf8');
    response.on('data', console.log);
}