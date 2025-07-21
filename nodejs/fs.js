/**
 * 需求：新建一个文件，座右铭.txt,写入内容：三人行，必有我师焉
 */

const fs = require('node:fs')
const os = require('node:os')
//创建文件
fs.writeFile('./test.txt', '写入文件内容',{}, (err) => {
    if(err) {
        console.log('err', err)
        return;
    }
    console.log('写入成功！')
})


//fs 追加写入
fs.appendFile('./test.txt', os.EOL + '追加文件内容', err => {
    if (err) {
        console.log('err', err)
        return
    }
    console.log('追加成功！')
});

// 使用 writeFile 进行追加
fs.writeFile('./test.txt', os.EOL + '再次追加', {flag:'a'}, err => {
    if(err) {
        console.log('再次追加失败', err);
        return;
    }
    console.log('文件再次追加成功！')
})

// 流式写入
// 1.创建写入流对象
const ws = fs.createWriteStream('writeStream.txt');
//2.写入内容
ws.write('写入' + os.EOL);
ws.write('再次写入' + os.EOL);
ws.write('持续写入' + os.EOL);
//3.关闭写入流
ws.close() // 可选调用，不手动关闭的话也会自动被系统进行回收
