const express = require('express')
const router = express.Router()
const expressJoi = require('@escook/express-joi')
const userinfo_handler = require('../router_handler/userinfo')
//更改密码校验
const {
  update_userinfo_schema,
  update_password_schema,
  update_avatar_schema
} = require('../schema/user')

//
router.get('/userinfo', userinfo_handler.getUserInfo)
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)
//更换头像
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)
//
module.exports = router