const itheima = require('./itheima-tools/index')
const str = '<h1 style="abc">这是h1标签<span>123&456</span></h1>'
console.log(str);
const newStr = itheima.htmlEscape(str)
console.log(itheima.htmlUnescape(newStr));