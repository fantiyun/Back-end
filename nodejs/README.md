## 1.nodejs 是什么？
- Nodejs is an open-source, cross-platform Javascript runtime enviroment(Node.js是一个开源的，跨平台的 JavaScript 运行环境)
- 通俗来讲：Node.js 就是一款应用程序，是一款软件，它可以运行JavaScript。

### 1.1 Node.js 的作用
1. 开发服务器应用
2. 开发工具类应用
3. 开发桌面端应用

##


##  Buffer 缓冲器
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
3. form
``` javascript
    let str = ''
    let arr = []
    let buf = Buffer.form(arr); // 可以将一个字符串或者数组转为buffer，会将内容转为16进制存于字节中
```
