//导入模块
const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user.js')

//导入校验模块
const expressJoi = require('@escook/express-joi')
const {
  reg_login_schema
} = require('../schema/user')
//路由
//加入校验中间件
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)
router.post('/login', expressJoi(reg_login_schema), userHandler.login)
//向外暴露
module.exports = router