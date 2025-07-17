// ========================================
// Node.js 学习示例 - 阶段一：核心基础
// ========================================

console.log('🚀 Node.js 学习示例 - 阶段一开始！\n');

// 1. 模块系统示例
// ================

// 1.1 CommonJS模块导入
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

// 1.2 打印Node.js和系统信息
console.log('📊 系统信息:');
console.log(`Node.js版本: ${process.version}`);
console.log(`操作系统: ${os.type()} ${os.release()}`);
console.log(`CPU架构: ${os.arch()}`);
console.log(`总内存: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB\n`);

// 2. 文件系统操作示例
// ==================

// 2.1 异步读取文件示例
function readFileExample() {
    console.log('📁 文件操作示例:');
    
    // 异步读取当前目录下的package.json（如果存在）
    fs.readFile('package.json', 'utf8', (err, data) => {
        if (err) {
            console.log('package.json不存在，这很正常！');
        } else {
            console.log('找到package.json文件');
            try {
                const packageInfo = JSON.parse(data);
                console.log(`项目名称: ${packageInfo.name || '未命名'}`);
            } catch (e) {
                console.log('package.json格式错误');
            }
        }
    });
}

// 2.2 同步vs异步对比
function syncVsAsyncExample() {
    console.log('\n⚡ 同步 vs 异步对比:');
    
    console.log('开始异步操作...');
    fs.readdir('.', (err, files) => {
        if (!err) {
            console.log(`异步操作完成: 当前目录有 ${files.length} 个文件/文件夹`);
        }
    });
    
    console.log('这行会先执行（因为上面是异步的）');
    
    try {
        const files = fs.readdirSync('.');
        console.log(`同步操作: 当前目录有 ${files.length} 个文件/文件夹`);
    } catch (err) {
        console.log('读取目录失败');
    }
}

// 3. 路径操作示例
// ===============

function pathExample() {
    console.log('\n🛣️  路径操作示例:');
    
    const currentFile = __filename;
    const currentDir = __dirname;
    
    console.log(`当前文件路径: ${currentFile}`);
    console.log(`当前目录: ${currentDir}`);
    console.log(`文件名: ${path.basename(currentFile)}`);
    console.log(`文件扩展名: ${path.extname(currentFile)}`);
    console.log(`目录名: ${path.dirname(currentFile)}`);
    
    // 路径拼接示例
    const examplePath = path.join(currentDir, 'examples', 'test.txt');
    console.log(`拼接路径示例: ${examplePath}`);
}

// 4. 环境变量和命令行参数
// ======================

function processExample() {
    console.log('\n🔧 进程信息示例:');
    
    console.log(`进程ID: ${process.pid}`);
    console.log(`Node.js执行路径: ${process.execPath}`);
    console.log(`工作目录: ${process.cwd()}`);
    
    // 命令行参数
    console.log('命令行参数:');
    process.argv.forEach((arg, index) => {
        console.log(`  ${index}: ${arg}`);
    });
    
    // 环境变量示例
    console.log(`HOME目录: ${process.env.HOME || process.env.USERPROFILE}`);
    console.log(`PATH包含的路径数量: ${(process.env.PATH || '').split(path.delimiter).length}`);
}

// 5. 简单的错误处理示例
// ====================

function errorHandlingExample() {
    console.log('\n❌ 错误处理示例:');
    
    // 尝试读取不存在的文件
    fs.readFile('不存在的文件.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('✅ 正确处理了文件读取错误');
            console.log(`错误类型: ${err.code}`);
            console.log(`错误信息: ${err.message}`);
        } else {
            console.log('文件内容:', data);
        }
    });
}

// 6. 创建简单的文件操作工具
// ========================

function createFileManager() {
    console.log('\n🛠️  文件管理器示例:');
    
    const fileManager = {
        // 列出目录内容
        listDirectory: (dirPath = '.') => {
            try {
                const files = fs.readdirSync(dirPath);
                console.log(`📂 ${dirPath} 目录内容:`);
                files.forEach(file => {
                    const filePath = path.join(dirPath, file);
                    const stats = fs.statSync(filePath);
                    const type = stats.isDirectory() ? '📁' : '📄';
                    const size = stats.isFile() ? `(${stats.size} bytes)` : '';
                    console.log(`  ${type} ${file} ${size}`);
                });
            } catch (err) {
                console.log(`错误: 无法读取目录 ${dirPath}`);
            }
        },
        
        // 创建文件
        createFile: (filename, content = '') => {
            fs.writeFile(filename, content, (err) => {
                if (err) {
                    console.log(`❌ 创建文件失败: ${err.message}`);
                } else {
                    console.log(`✅ 成功创建文件: ${filename}`);
                }
            });
        },
        
        // 检查文件是否存在
        fileExists: (filename) => {
            return fs.existsSync(filename);
        }
    };
    
    return fileManager;
}

// 主函数 - 运行所有示例
// ===================

function runAllExamples() {
    console.log('🎯 开始执行所有示例...\n');
    
    readFileExample();
    syncVsAsyncExample();
    pathExample();
    processExample();
    errorHandlingExample();
    
    // 文件管理器示例
    const manager = createFileManager();
    manager.listDirectory();
    
    console.log('\n✨ 所有示例执行完成！');
    console.log('\n💡 学习建议:');
    console.log('1. 尝试修改这些示例代码，看看会发生什么');
    console.log('2. 试着创建自己的文件操作函数');
    console.log('3. 查阅Node.js官方文档了解更多API');
    console.log('4. 继续阅读学习计划，进入下一个阶段！');
}

// 导出模块（供其他文件使用）
module.exports = {
    readFileExample,
    syncVsAsyncExample,
    pathExample,
    processExample,
    errorHandlingExample,
    createFileManager,
    runAllExamples
};

// 如果直接运行此文件，执行所有示例
if (require.main === module) {
    runAllExamples();
} 