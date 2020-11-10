const express = require('express')
const app = express()
//中间件
const m1 = (req, res, next) => {
    console.log('我是第一个');
    next()
}
const m2 = (req, res, next) => {
    console.log('我是第二个');
    next()
}
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.get('/user', [m1, m2], (req, res) => {
    res.send(1)
})
app.post('/api', (req, res) => {
    // console.log(req.query);
    res.send(req.body)
})
//启动服务器
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})