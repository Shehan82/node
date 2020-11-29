const path = require('path');
// console.log(__filename);
// console.log(__dirname);


console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename)); // for get path as the object

console.log(path.parse(__filename).base);

console.log(path.join(__dirname, "hello", "my.html"));


