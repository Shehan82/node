// const Student = require('./student');

// let student1 = new Student("shehan", "jf");
// student1.details();  

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
     res.write("hello how are you!");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{console.log(`Server running on port ${PORT}....`)});
