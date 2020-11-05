const fs = require('fs');
fs.readFile(path.join(__dirname, './files/成绩-ok.txt'), 'utf-8', function (err, data) {
    if (err) return console.log('读取文件失败：' + err.message)
    console.log('读取文件成功，内容是' + data)
})