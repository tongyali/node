//1.导入模块
const express = require('express')
const router = require('./03路由模块')
//2.创建服务器实例
const app = express()
//3.注册路由
app.use(router)
//4.启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})