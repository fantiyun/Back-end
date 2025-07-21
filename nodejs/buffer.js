
//Buffer的三种创建方式
//1. 使用 alloc：
let buf_alloc = Buffer.alloc(10);// 创建长度为10个字节的纯净buffer
//2. 使用 allocUnsafe
let buf_allocUnsafe = Buffer.allocUnsafe(10); // 创建长度为10个字节的可能存在内存旧数据的buffer
//3.使用from
let buf_from_str = Buffer.from('hello') // 可以将数组或者字符串转为Buffer，转换成16进制存储到buffer中
let buf_from_arr = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]); // 转换成二进制存储到Buffer中

//console.log(buf_from_arr)


//Buffer的操作与注意事项
//1. Buffer的操作与字符串的转换，我们可以借助字符串的 toString() 方法，将 Buffer 转为字符串
console.log(buf_from_arr.toString()) // 默认是utf-8格式做的转换
//2. Buffer元素的读写
console.log(buf_from_str[0]) // 读取默认为十进制
buf_from_str[0] = 95
console.log(buf_from_str[0])
buf_from_str.toString() // 把Buffer 转为字符串
console.log(buf_from_str)

//补充说明
//1.溢出
//2.中文
console.log(Buffer.from('你好'))  // utf8的中文一般占用是三个字节