//1.导入http模块
const http = require('http')
//2.创建web服务器
const server = http.createServer()
//3.绑定request事件
server.on('request', (req, res) => {
    console.log(req.url);
    res.end('hello world')
})
//4.启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})