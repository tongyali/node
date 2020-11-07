const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        if (req.url === '/') {
            res.end('欢迎来到首页')
        } else if (req.url === '/news.html') {
            res.end('欢迎来到新闻页面')
        } else {
            res.end('<h1>404 Not found</h1>')
        }

    } else {
        res.end('老铁你发送的是post请求')
    }


})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})