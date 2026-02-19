//console.log("Hello Node.js!");
const fs = require('fs'); 
fs.writeFile('file.txt', 'Hiiiiiiiii', function (err, data) {   
    if (err) throw err; 
    console.log("File written successfully!");
}); 
