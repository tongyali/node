// 1.导入文件模块和路径模块
const fs = require('fs')
const path = require('path')
//2.读取文件内容
fs.readFile(path.join(__dirname, '素材', '成绩.txt'), 'utf-8', (err, data) => {
    if (err) return console.log("读取文章失败" + err.message)
    // console.log(data);
    //加工数据
    const newData = data.replace(/=/g, ":").replace(/\s/g, "\n")
    console.log(newData);
    //将文件写入
    fs.writeFile(path.join(__dirname, 'files', '成绩-ok.text'), newData, err => {
        if (err) return console.log("写入文章失败" + err.message);
        console.log("写入文件成功");
    })
})