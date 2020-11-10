const express = require('express')
const app = express()
//中间件
app.use((req, res, next) => {
    console.log('我是中间件')
    next()
})
app.get('/user', (req, res) => {
    console.log(req.query);
    res.send(req.query)
})
//启动服务器
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})