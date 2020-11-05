const fs = require('fs')
fs.writeFile("./files/01.text", 'zhangsan', (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
})