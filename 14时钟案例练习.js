//1.导入模块
const fs = require('fs')
const path = require('path')
//定义正则
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
//读取文件
fs.readFile(path.join(__dirname, '素材', 'index.html'), 'utf-8', (err, data) => {
    if (err) return console.log("读取文件失败" + err.message);
    // console.log(data);
    resolveStyle(data)
    resolveJS(data)
    resolveHTML(data)
})
//封装分割函数
function resolveStyle(data) {
    //提取对应style的内容 将style标签替换为空字符串
    const newData = regStyle.exec(data)[0].replace('<style>', '').replace('</style>', '')
    //将文件写入对应文件夹
    fs.writeFile(path.join(__dirname, 'clock', 'index2.css'), newData, err => {
        if (err) return console.log("写入文件失败" + err.message)
        console.log("写入文件成功");
    })
}

function resolveJS(data) {
    const newData = regScript.exec(data)[0].replace("<script>", '').replace('</script>', '')
    //写入文件
    fs.writeFile(path.join(__dirname, 'clock', 'index2.js'), newData, err => {
        if (err) return console.log("写入文件失败" + err.message);
        console.log("写入文件成功");
    })
}

function resolveHTML(data) {
    const newHTML = data.replace(regStyle, '<link rel="stylesheet" href="./index2.css">').replace(regScript, '<script src="./index2.js"></script>')
    //写入文件
    fs.writeFile(path.join(__dirname, 'clock', 'index2.html'), newHTML, err => {
        if (err) return console.log("写入文件失败" + err.message);
        console.log("写入文件成功");
    })
}