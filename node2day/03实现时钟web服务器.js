//导入模块
const fs = require('fs')
const path = require('path')
const http = require('http')
//创建webshili
const server = http.createServer()
//绑定request事件
server.on('request', (req, res) => {
    //将资源的请求地址映射为本地文件存放的路径
    //1.获取url地址
    const url = req.url
    //2.拼接本地路径
    const fpath = path.join(__dirname, url)
    fs.readFile(fpath, 'utf-8', (err, str) => {
        if (err) {
            return res.end('<h1>404 Not found</h1>')
        }
        res.end(str)
    })
})
//启动服务器
server.listen(80, () => {
    console.log('server is running at http://127.0.0.1');
})