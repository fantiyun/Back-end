const math = require('./utils/math');
const string = require('./utils/string');
const fileManage = require('./utils/file-manager')

//console.log(math.add(1, 2));
//console.log(math.factorial(5));
//console.log(math.multiply(2, 3));
//console.log(string.reverse('hello world'));
//console.log(string.capitalize('hello world'));
//console.log(string.wordCount('hello world'));


//console.log(fileManage.createFile('test.txt', '测试内容'))
fileManage.readFile('./exercises/utils/file-manager.js', (content) => console.log(content))