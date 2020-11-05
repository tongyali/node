//导入fs文件模块，来操作文件
const fs = require('fs')
fs.readFile('./files/demo.text', 'utf-8', function (err, data) {
    if (err) return console.log('读取文件失败：' + err.message)
    console.log('读取文件成功，内容是' + data)
})