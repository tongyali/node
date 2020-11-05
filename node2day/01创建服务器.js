//导入httpmokuai
const http = require('http')
//创建web实例
const server = http.createServer()
//绑定on request事件
server.on("request", (req, res) => {
    const str = `您访问的url地址是${req.url},请求的方式是${req.method}`
    //防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(str)
})
//启动服务器
server.listen(80, () => {
    console.log('server is running at http://127.0.0.1');
})