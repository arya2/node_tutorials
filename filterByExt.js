module.exports = filterByExt;
var fs = require('fs');

function filterByExt(dirname, ext, callback){
    fs.readdir(dirname, filterFunction);
    
    function filterFunction(err, data){
        if (err) return callback(err);
        callback(null, data.filter(filename => filename.endsWith('.'+ext)));
    }
}