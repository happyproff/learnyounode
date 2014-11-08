var dir = process.argv[2];
var ext = process.argv[3];
var filtered_ls = require('./filtered_ls');

filtered_ls(dir, ext, function(err, data){
    if (err) {
        console.error('Error: "' + err + '"');
        process.exit();
    }

    data.forEach(function(file){
        console.log(file);
    });
});
