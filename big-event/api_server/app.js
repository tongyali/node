//导入模块
const express = require('express')
const cors = require('cors')
//*导入路由
const router = require('./router/user')
const router_userinfo = require('./router/userinfo')
const artCateRouter = require('./router/artcate')
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
// 解析 Token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')
app.use(expressJWT({
    secret: config.jwtSecretKey
}).unless({
    path: [/^\/api/]
}))

//路由
app.use('/api', router)
app.use('/my', router_userinfo)
app.use('/my/article', artCateRouter)

//全局的错误中间件
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.cc(err)
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知的错误
    res.cc(err)
})

//启动服务器
app.listen(3007, () => {
    console.log('express server running at http://127.0.0.1:3007');
})