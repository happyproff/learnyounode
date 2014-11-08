var filePath = process.argv[2];
var fs = require('fs');
var buffer = fs.readFileSync(filePath);
console.log(buffer.toString().split("\n").length - 1);
