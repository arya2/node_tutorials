var http = require('http');
var bl = require('bl');

http.get(process.argv[2], responseHandler);

function responseHandler(response) {

    response.pipe(bl(function (err, data) {
        result = data.toString();
        console.log(result.length);
        console.log(result);
    }));
}