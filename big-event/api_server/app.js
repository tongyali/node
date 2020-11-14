//导入模块
const express = require('express')
const cors = require('cors')
//*导入路由
const router = require('./router/user')
//创建服务器实例
const app = express()
//校验
const joi = require('@hapi/joi')
//中间件
app.use((req, res, next) => {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})
//解决跨域问题
app.use(cors())
//解析表单数据
app.use(express.urlencoded({
    extended: false
}))
//路由
app.use(router)
//全局的错误中间件
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.cc(err)
    return res.cc(err)

})

//启动服务器
app.listen(3007, () => {
    console.log('express server running at http://127.0.0.1:3007');
})