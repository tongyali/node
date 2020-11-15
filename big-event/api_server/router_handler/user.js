//导入数据库操作模块
const db = require('../db/index')
const bcrypt = require('bcryptjs')
//导入生成token模块
const jwt = require('jsonwebtoken')
const config = require('../config')
//注册新用户的处理函数
exports.regUser = (req, res) => {
    // 获取用户提交的数据
    const userinfo = req.body
    if (!userinfo.username || !userinfo.password) {
        return res.cc('用户名或密码不能为空')
        // res.send({
        //     status: 1,
        //     message: '用户名或密码不能为空'
        // })
    }
    const sqlstr = 'select * from ev_users where username=?'
    db.query(sqlstr, [userinfo.username], (err, results) => {

        if (err) return res.send({
            status: 1,
            message: err.message
        })
        console.log(results);
        //用户名查重
        if (results.length > 0) {
            // return res.send({
            //     status: 1,
            //     message: '用户名被占用，请更换用户名'
            // })
            return res.cc('用户名被占用，请更换用户名')
        }
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        const sql = 'insert into ev_users set ?'
        db.query(sql, {
            username: userinfo.username,
            password: userinfo.password
        }, (err, results) => {
            if (err) return res.cc(err)
            //         return res.send({
            //     status: 1,
            //     message: err.message
            // })
            if (results.affectedRows !== 1) {
                return res.cc("用户注册失败")
                // res.send({
                //     status: 1,
                //     message: "用户注册失败"
                // })
            }
            return res.cc("注册成功", 0)
            //     res.send({
            //     status: 0,
            //     message: "注册成功"
            // })
        })
    })

}
//登录的处理函数
exports.login = (req, res) => {
    const userinfo = req.body
    const sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        //执行sql语句失败
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('登入失败')
        //验证密码
        const compareResults = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResults) return res.cc('登录失败')
        //生成token字符串
        const user = {
            ...results[0],
            password: '',
            user_pic: ''
        }
        //对用户信息加密，生成token
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '10h'
        }) // token 有效期为 10 个小时 })
        console.log(user);
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
        // return res.cc('登录成功', 0)
    })

}