const qs = require('querystring')

function bodyParse(req, res, next) {
    let str = ''
    //监听req的data事件
    req.on('data', (chunk) => {
        str += chunk
    })
    //监听req的end事件
    req.on('end', () => {
        const body = qs.parse(str)
        req.body = body
        next()
    })
}
module.exports = bodyParse