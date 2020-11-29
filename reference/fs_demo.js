const fs = require('fs');
const path = require('path');

//make folder
fs.mkdir(path.join(__dirname,'/hello'),(err) => {
    if(err) throw err;
    console.log("folder created !");
})