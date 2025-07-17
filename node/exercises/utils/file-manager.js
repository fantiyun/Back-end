const fs = require('node:fs');
const path = require('node:path');

const createFile = (filename, content) => {
    fs.writeFile(filename, content, err => {
        if(err) {
            console.log('文件创建失败！')
        } else {
            console.log('文件创建成功！', JSON.stringify(content))

        }
    })
}

const readFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      console.log('文件读取失败！', err.message)
    } else {
      if(callback) {
        callback(data)
      }
    }
  })
}


const deleteFile = (filePath, callback) => {

    fs.unlink(filePath, (err)  => {
        if(err) {
            console.log(`文件 ${path.baseName}删除失败`)
        } else {
            console.log(`文件${path.baseName}删除成功`)
        }
    })
}

module.exports = {
    createFile,
    readFile,
    deleteFile
}