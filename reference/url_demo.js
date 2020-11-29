const url = require('url');


const myUrl = new URL('http://www.google.com:8080/hello.html?id=100&name=shehan');

console.log(myUrl.href);

console.log(myUrl.host);

console.log(myUrl.hostname);

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);

myUrl.searchParams.append('abc', 123);

console.log(myUrl.searchParams);