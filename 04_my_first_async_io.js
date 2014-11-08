var filePath = process.argv[2];
var fs = require('fs');
fs.readFile(filePath, null, function(error, buffer){
    console.log(buffer.toString().split("\n").length - 1);
});
