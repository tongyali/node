const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    const data = req.query
    res.send('这是主页' + data)
})
router.get('/list', (req, res) => {
    res.send('这是get请求！')
})
router.post('/add', (req, res) => {
    res.send('这是post请求！')
})
module.exports = router