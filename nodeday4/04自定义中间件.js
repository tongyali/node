const express = require('express')
const app = express()
// const qs = require('querystring')
const myBodyParse = require('./05自定中间件模块')
//注册中间体
app.use(myBodyParse)
//注册路由
app.post('/user', (req, res) => {

    res.send(req.body)
})
//启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})