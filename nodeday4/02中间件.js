//1.导入模块
const express = require('express')
//2.创建服务器实例
const app = express()
//3.注册中间件
app.use((req, res, next) => {
    console.log("我是第一个中间件");
    req.a = 10
    next()
})
app.use((req, res, next) => {
    console.log('我是第二个中间件');
    res.b = 20
    next()
})
app.use((req, res, next) => {
    console.log('我是第三个中间件');

    next()
})
//4.注册路由
app.get('/user/app', (req, res) => {
    res.send('我有三个中间件' + res.b + req.a)
})
//5.启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})