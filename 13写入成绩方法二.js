//导入模块
const fs = require('fs')
const path = require('path')
//读取文件
fs.readFile(path.join(__dirname, '素材', '成绩.txt'), 'utf-8', (err, data) => {
    if (err) return console.log("读取文件失败" + err.message);
    // console.log(data);
    //加工数据
    // 字符串分割
    const data1 = data.split(' ')
    // console.log(data1);
    const data2 = []
    data1.forEach(items => {
        data2.push(items.replace("=", ":"))

    })
    // console.log(data2);
    const newData = data2.join("\n")
    console.log(newData);
})