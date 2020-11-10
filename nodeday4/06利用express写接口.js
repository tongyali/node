//导入模块
const express = require('express')
const router = require('./07Api')
const cors = require('cors')
//创建服务器实例
const app = express()
//解决 跨域问题
app.use(cors())
//中间件
app.use(express.urlencoded({
    extended: false
}))
//路由
app.use('/api', router)
//启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})