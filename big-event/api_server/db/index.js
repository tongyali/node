//导入模块
const mysql = require('mysql')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'my_db_01',
    // multipleStatements: true // 支持执行多条 sql 语句
})
module.exports = db