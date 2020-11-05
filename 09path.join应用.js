const fs = require("fs")
const path = require("path")
fs.readFile(path.join(__dirname, '/素材/成绩.txt'), 'utf8', (err, data) => {
    if (err) return console.log("读取文件失败" + err.message)
    console.log("读取文件成功" + data);
})