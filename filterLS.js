fs = require('fs');
list = fs.readdir(process.argv[2], printData);

function printData(r, d){
    d.forEach(function(filename){
        if (filename.endsWith('.'+process.argv[3])) console.log(filename);
    });
}