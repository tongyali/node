const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'my_db_01',
})
// const sql = 'insert into users (username,password) value ("zs",112232)'
// const sql = 'update users set username="三水" where id=15'
// const sql = 'update users set status=1 where id=14'
// const sql = 'select * from users'
// const sql = 'select count(*) from users where status=0'
const sql = 'select count(*) as total from users where status=0'
db.query(sql, (err, data) => {
    if (err) return console.log(err);
    console.log(data);
})