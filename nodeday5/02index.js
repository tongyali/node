const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'my_db_01'
})
// const str = 'select * from users'
// db.query(str, (err, data) => {
//     if (err) return console.log(err);
//     console.log(data);
// })
//插入
// const userinfo = {
//     username: 'jane',
//     password: '123456'
// }
// // const sql = `insert into users (username,password) values (?,?)`

// const sql = 'insert into users set ?'
// // db.query(sql, [userinfo.username, userinfo.password], (err, data) => {
// //     if (err) return console.log(err);
// //     if (data.affectedRows === 1) {
// //         console.log('插入成功');
// //     }
// // })
// db.query(sql, userinfo, (err, data) => {
//     if (err) return console.log(err);
//     if (data.affectedRows === 1) {
//         console.log('插入成功');
//     }
// })
//更新
// const sql = `update users set username=?,password=? where id=?`
// const user = {
//     username: 'haha',
//     password: 'abc456',
//     id: 18
// }
// db.query(sql, [user.username, user.password, user.id], (err, data) => {
//     if (err) return console.log(err);
//     if (data.affectedRows === 1) {
//         console.log('更新成功');
//     }
// })
// const sql = `update users set ? where id=?`
// const user = {
//     username: 'haha233',
//     password: 'abc456789',
//     id: 19
// }
// db.query(sql, [user, user.id], (err, data) => {
//     if (err) return console.log(err);
//     if (data.affectedRows === 1) {
//         console.log('更新成功');
//     }
// })
//删除
// const sql = `delete from users where id=?`
// db.query(sql, 20, (err, data) => {
//     if (err) return console.log(err);
//     if (data.affectedRows === 1) {
//         console.log('删除成功');
//     }
// })
//标记删除
const sql = `update users set status=? where id=?`
db.query(sql, [1, 17], (err, data) => {
    if (err) return console.log(err);
    if (data.affectedRows === 1) {
        console.log('标记删除成功');
    }
})