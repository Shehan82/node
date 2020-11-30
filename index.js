// const Student = require('./student');

// let student1 = new Student("shehan", "jf");
// student1.details();  

const http = require('http');
const path = require('path');
const fs = require('fs');
const { dirname } = require('path');

const server = http.createServer((req, res) => {

    const filePath = path.join(__dirname, '/public',
         req.url === '/' ? 'index.html' : req.url
    )

    const extension = path.extname(filePath);

    const cType = 'text/html';

    switch(extension)
    {
        case '.js':
            cType = 'text/js';
            break;
        case '.css':
            cType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, data)=>{
        
        if(err)
        {
            if(err.code == 'ENOENT')
            {
                fs.readFile(path.join(__dirname, '/public', '404.html'), (err, data)=>{
                    res.writeHead(200, {'content-type' : 'text/html'});
                    res.end(data);
                })
            }
            else
            {
                fs.readFile(path.join(__dirname, '/public', 'error.html'), (err, data)=>{
                    res.writeHead(200, {'content-type' : 'text/html'});
                    res.end(data);
                })
            }
        }
        else
        {
            res.writeHead(200, {'content-type' : cType});
            res.end(data, 'utf-8');
        }
       
    })
    console.log(filePath);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{console.log(`Server running on port ${PORT}....`)});
