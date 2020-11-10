const express = require('express')
const app = express()
//路由
const router = require('./09模块化路由')
app.use('/api', router)
//启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})