const fs = require('fs')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname, './素材/index.html'), 'utf-8', function (err, data) {
    if (err) return console.log('读取文件失败' + err.message)

    // console.log(da-ta);
    resolveStyle(data)
    resolveScript(data)
    resolveHTML(data)

})

function resolveStyle(data) {
    const s1 = regStyle.exec(data)
    // console.log(s1);
    const s = s1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, 'clock', 'index1.css'), s, (err) => {
        if (err) return console.log('写入样式文件失败' + err.message)
        console.log('写入样式文件成功');
    })
}

function resolveScript(data) {
    const s = regScript.exec(data)[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, 'clock', 'index1.js'), s, err => {
        if (err) return console.log('写入文章失败' + err)
        console.log('写入文章成功');
    })

}

function resolveHTML(data) {
    const newhtml = data.replace(regStyle, '<link rel="stylesheet" href="./index1.css"/>').replace(regScript, '<script src="./index1.js"></script>')
    fs.writeFile(path.join(__dirname, 'clock', 'index1.html'), newhtml, err => {
        if (err) return console.log('写入文件失败' + err.message)
        console.log('写入文章成功');
    })
}