const fs = require("fs")
fs.readFile("./素材/成绩.txt", "utf8", (err, data) => {
    if (err) {
        return console.log("读取文件失败" + err.message)

    }
    // console.log("读取文件成功" + data);
    const data1 = data.split(" ")
    // console.log(data1);
    const data2 = []
    data1.forEach(items => {
        data2.push(items.replace("=", ":"))
    });
    // console.log(data2);
    const newData = data2.join("\r\n")
    // console.log(newData);
    fs.writeFile("./files/成绩-ok1.text", newData, "utf8", (err, data) => {
        if (err) {
            return console.log("写入成绩失败" + err.message);
        }
        console.log("写入成绩成功");
    })
})