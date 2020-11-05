const fs = require("fs")
fs.readFile("./files/01.text", utf8, (err, data) => {
    // 
    if (err) {
        console.log("读取文件失败" + err.message);
    }
    console.log("读取文件成功" + data);
})