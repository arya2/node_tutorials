fs = require('fs');
fs.readFile(process.argv[2], printData);

function printData(e, d){
    console.log(d.toString().split('\n').length-1);
}