var sum = 0;
var argvLength = process.argv.length;
for (var i = 2; i < argvLength; i++) sum += parseInt(process.argv[i]);
console.log(sum);
