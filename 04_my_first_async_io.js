var fs = require('fs');

var filePath = process.argv[2];
fs.readFile(filePath, null, function(error, buffer){
    console.log(buffer.toString().split("\n").length - 1);
});
