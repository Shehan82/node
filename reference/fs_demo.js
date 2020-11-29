const fs = require('fs');
const path = require('path');

//make folder
// fs.mkdir(path.join(__dirname,'/hello'),(err) => {
//     if(err) throw err;
//     console.log("folder created !");
// })

//create and write to file

// fs.writeFile(path.join(__dirname, '/hello', 'hi.txt'), 'hello i am hello how are you hi', (err) => {
//     if(err) throw err;
//     console.log("written in file");

//     fs.appendFile(path.join(__dirname, '/hello', 'hi.txt'), 'hello i am hello how are you hiafkasfjak121 i am appended one', (err) => {
//         if(err) throw err;
//         console.log("written in file");
//     }) 
// }) 

fs.readFile(path.join(__dirname, '/hello', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

