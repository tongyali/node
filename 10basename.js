const path = require('path')
const str = path.basename('/a/a/a/index.html')
// console.log(str)
const str1 = path.basename(str, '.html')
console.log(str1);