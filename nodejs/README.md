## 1.nodejs 是什么？
- Nodejs is an open-source, cross-platform Javascript runtime enviroment(Node.js是一个开源的，跨平台的 JavaScript 运行环境)
- 通俗来讲：Node.js 就是一款应用程序，是一款软件，它可以运行JavaScript。

### 1.1 Node.js 的作用
1. 开发服务器应用
2. 开发工具类应用
3. 开发桌面端应用

##


## Buffer 缓冲器
Buffer是一个类似于数组的对象，用于表示固定长度的字节序列
Buffer本质是一段内存空间，专门用来处理二进制数据。

### 1.特点
1. Buffer 大小固定且无法调整
2. Buffer 性能较好，可以直接对计算机内存进行操作
3. 每个元素的大小为1字节(byte)

### 2.使用
#### 2.1 创建 Buffer
1. alloc
``` javascript
    let buf = Buffer.alloc(10); // 分配长度为10个byte，使用alloc创建会对每个字节内容都清楚，保证每个字节都为00
```
2. allocUnsafe
 ``` javascript
    let buf = Buffer.allocUnsafe(10); // 分配长度为10个不安全的字节，不会对字节内旧数据进行清除，可能会包含旧的内存数据，但是创建相效率要比 alloc 更快
```
3. from
``` javascript
    let buf_from_str = Buffer.from('hello') // 可以将数组或者字符串转为Buffer，转换成16进制存储到buffer中
    let buf_from_arr = Buffer.from([1, 2, 3, 412, 15]); // 转换成二进制存储到Buffer中
```

#### 2.2 Buffer的操作与注意事项
1. 溢出
当所设置的值超出了八位的二进制最大值，会舍弃超出的部分

2. 中文
utf8格式的中文一般是是占用三个字节的
```javascript
console.log(Buffer.from('你好')) // <Buffer e4 bd a0 e5 a5 bd>
```

## 计算机基本组成
1. CPU：处理任务
2. 内存：存储数据，访问速度更快（纳秒级别），断电后数据丢失
3. 硬盘：存储数据，访问速度相比内存更慢（毫秒级别），断电后数据不丢失
4. 主板：承载电子元件
5. 显卡：处理视频信号

## 程序运行的基本流程
操作系统本质也是一种应用程序，用来管理和调度硬件资源。
操作系统可以决定让CPU执行那个程序，控制显示内容、存储和删除文件等等。

系统运行的基本流程：将系统存储到硬盘中 -> 开机 -> 将系统载入内存 -> 使用CPU执行指令 -> 存在图像信号 -> 使用显卡加载 -> 检测有声音信就使用音响进行处理

程序运行的基本流程：安装到硬盘-> 双击启动 -> 将程序载入内存 -> 使用CPU执行指令 -> 存在图像信号 -> 使用显卡加载 -> 检测有声音信就使用音响进行处理

## 进程与线程
1. 进程：进程是程序的一次执行过程
2. 线程：线程是一个进程中执行的一个执行流，一个线程是属于某个进程的


## fs 模块
fs 是 file system 的简写，可以实现与硬盘的交互，例如文件的创建、删除、重命名、移动等，还有文件内容的写入、读取，以及文件夹的相关操作。

1. 写入文件
```js
const fs = require('node:fs')

//创建文件
fs.writeFile('./座右铭.txt', '三人行，必有我师焉',{}, (err) => {
    if(err) {
        console.log('err', err)
        return;
    }
    console.log('写入成功！')
})
```

2. fs 异步和同步语法
```js
fs.writeFile('filePath+fileName','fileContent', {}, err => {})
fs.writeFileSync('filePath+fileName','fileContent', {})

```

3. 追加写入
```js
const fs = require('node:fs')
const os = require('node:os')

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

```

4.文件流写入
```javascript
const fs = require('node:fs')
const os = require('node:os')

// 流式写入
// 1.创建写入流对象
const ws = fs.createWriteStream('writeStream.txt');
//2.写入内容
ws.write('写入' + os.EOL);
ws.write('再次写入' + os.EOL);
ws.write('持续写入' + os.EOL);
//3.关闭写入流
ws.close() // 可选调用，不手动关闭的话也会自动被系统进行回收

```


5. 文件写入的应用场景
- 下载文件
浏览器下载视频操作：服务器会把视频信息返回给浏览器 -> 浏览器接收到信息后往文件中写入
- 安装软件
- 保存程序日志，如 Git
- 编辑器保存文件
- 视频录制

> tips 当需要持久化保存数据时，应该想到文件写入

6.