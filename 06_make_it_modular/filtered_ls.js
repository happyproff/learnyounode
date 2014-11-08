module.exports = function(dir, ext, callback){
    var fs = require('fs');
    var path = require('path');

    return fs.readdir(dir, function(err, files){
        if (err) return callback(err);

        var list = [];
        files.forEach(function(file){
            if (path.extname(file) === '.' + ext) list.push(file);
        });

        callback(null, list);
    });
};