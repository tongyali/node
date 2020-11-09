const express = require('express')
const router = express.Router()
router.get('/user/list', (req, res) => {
    res.send("get")
})
router.post('/user/add', (req, res) => {
    res.send('发送成功2333')
})
module.exports = router