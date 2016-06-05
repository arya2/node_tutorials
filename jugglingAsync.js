var http = require('http');
var bl = require('bl');

var urls = Array.prototype.slice.call(process.argv, 2);
var responses = [];
var num_responses = 0;

urls.map(getUrl);

function getUrl(url, i) {
    http.get(url, responseHandler.bind(null, i));
}

function responseHandler(i, response) {
    response.pipe(bl(function (err, data) {
        result = data.toString();
        num_responses++;
        responses[i] = result;
        if (num_responses >= 3) responses.map(function (response) {
            console.log(response)
        });
    }));
}