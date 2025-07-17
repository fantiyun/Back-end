# Node.js 阶段一练习题 - 核心基础

## 🎯 练习目标
通过实际编程练习巩固Node.js核心基础知识

## 📝 练习题目

### 练习 1：模块系统练习
**难度：⭐**

创建以下文件结构：
```
exercises/
├── utils/
│   ├── math.js
│   └── string.js
└── main.js
```

**要求：**
1. 在 `math.js` 中创建并导出以下函数：
   - `add(a, b)` - 加法
   - `multiply(a, b)` - 乘法
   - `factorial(n)` - 阶乘

2. 在 `string.js` 中创建并导出以下函数：
   - `reverse(str)` - 字符串反转
   - `capitalize(str)` - 首字母大写
   - `wordCount(str)` - 统计单词数量

3. 在 `main.js` 中导入上述模块并测试所有函数

### 练习 2：文件系统操作
**难度：⭐⭐**

创建一个文件管理工具 `file-manager.js`，实现以下功能：

1. `createFile(filename, content)` - 创建文件
2. `readFile(filename)` - 读取文件内容
3. `deleteFile(filename)` - 删除文件
4. `listFiles(directory)` - 列出目录中的所有文件
5. `copyFile(source, destination)` - 复制文件

**要求：**
- 使用异步方法
- 添加适当的错误处理
- 在操作成功/失败时显示相应消息

### 练习 3：系统信息收集器
**难度：⭐⭐**

创建 `system-info.js`，收集并显示以下系统信息：

1. Node.js版本信息
2. 操作系统信息（类型、版本、架构）
3. 内存使用情况（总内存、已用内存、空闲内存）
4. CPU信息（架构、核心数）
5. 当前用户信息
6. 进程信息（PID、运行时间）

**要求：**
- 以格式化的方式显示信息
- 添加单位转换（如字节转GB）

### 练习 4：命令行参数处理器
**难度：⭐⭐⭐**

创建 `cli-parser.js`，能够解析命令行参数并执行相应操作：

支持的命令格式：
```bash
node cli-parser.js --name "张三" --age 25 --verbose
node cli-parser.js --help
node cli-parser.js --version
```

**要求：**
1. 解析命令行参数
2. 支持 `--help` 显示帮助信息
3. 支持 `--version` 显示版本信息
4. 支持 `--verbose` 详细输出模式
5. 验证参数类型和必需参数

### 练习 5：日志分析器
**难度：⭐⭐⭐**

创建 `log-analyzer.js`，分析日志文件：

1. 创建一个示例日志文件 `app.log`：
```
2024-01-15 10:30:25 [INFO] 用户登录成功
2024-01-15 10:31:12 [ERROR] 数据库连接失败
2024-01-15 10:32:05 [WARN] 内存使用率较高
2024-01-15 10:33:18 [INFO] 文件上传完成
2024-01-15 10:34:22 [ERROR] API调用超时
```

2. 实现以下分析功能：
   - 统计各级别日志数量（INFO, WARN, ERROR）
   - 找出所有错误日志
   - 按时间排序显示日志
   - 计算日志时间跨度

### 练习 6：文件监控器
**难度：⭐⭐⭐⭐**

创建 `file-watcher.js`，监控指定目录的文件变化：

**要求：**
1. 使用 `fs.watch()` 监控目录
2. 检测文件的创建、修改、删除
3. 显示详细的变化信息（时间、操作类型、文件名）
4. 支持递归监控子目录
5. 添加文件类型过滤功能

### 练习 7：简单的HTTP客户端
**难度：⭐⭐⭐**

使用Node.js的 `http` 模块创建 `http-client.js`：

**要求：**
1. 发送GET请求到指定URL
2. 处理响应数据
3. 支持HTTPS请求
4. 添加超时处理
5. 美化输出响应信息

示例用法：
```bash
node http-client.js https://api.github.com/users/octocat
```

## 🔍 练习提示

### 练习 1 提示：
```javascript
// math.js 示例结构
function add(a, b) {
    return a + b;
}

// 导出方式
module.exports = {
    add,
    multiply,
    factorial
};
```

### 练习 2 提示：
```javascript
const fs = require('fs');

function createFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error('创建文件失败:', err.message);
        } else {
            console.log(`文件 ${filename} 创建成功`);
        }
    });
}
```

### 练习 3 提示：
```javascript
const os = require('os');

// 内存转换函数
function formatBytes(bytes) {
    return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB';
}
```

## ✅ 完成标准

每个练习完成后，确保：
1. 代码能正确运行
2. 包含适当的错误处理
3. 输出信息清晰易读
4. 代码结构良好，有注释
5. 能处理边界情况

## 🎯 进阶挑战

完成基础练习后，可以尝试：
1. 将练习整合成一个CLI工具
2. 添加配置文件支持
3. 实现日志记录功能
4. 添加单元测试
5. 创建npm包

## 📚 参考资源

- [Node.js官方文档 - 文件系统](https://nodejs.org/api/fs.html)
- [Node.js官方文档 - 路径](https://nodejs.org/api/path.html)
- [Node.js官方文档 - 操作系统](https://nodejs.org/api/os.html)
- [Node.js官方文档 - 进程](https://nodejs.org/api/process.html)

---

**记住**：练习是学习的最佳方式！不要害怕犯错，多尝试，多调试！ 