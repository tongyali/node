const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, 'clock', demo.html)
    } else {
        fpath = path.join(__dirname, 'clock', req.url)
    }
    fs.readFile(fpath, (err, data) => {
        if (err) return req.end('404')
        res.end(data)
    })
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})