var filter = require('./filterByExt');
filter(process.argv[2], process.argv[3], printData);

function printData(err, data){
    data.forEach(function(filename){
        console.log(filename);
    });
}