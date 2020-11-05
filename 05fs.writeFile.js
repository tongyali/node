const fs = require("fs")

fs.writeFile("./files/3.txt", "abc", "utf8", (err) => {
    if (err) {
        console.log("写入文件失败" + err.message);
    }
    console.log("写入文件成功");
})