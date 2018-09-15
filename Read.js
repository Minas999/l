const fs = require('fs');
fs.readFile('tvyal.txt', 'utf-8', function (err, data) {
    if(err) throw err;
    console.log(data);
    
}) 
    
