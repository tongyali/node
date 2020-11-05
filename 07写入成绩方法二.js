const fs = require("fs")
fs.readFile("./素材/成绩.txt", "utf8", (err, data) => {
    if (err) {
        return console.log("读取文件失败" + err.message);
    }

    data = data.replace(/=/g, ":").replace(/\s/g, "\n")
    fs.writeFile("./files/成绩-ok2.text", data, "utf8", (err) => {
        if (err) {
            return console.log("写入成绩失败" + err.message);
        }
        console.log("写入成绩成功");
    })
})