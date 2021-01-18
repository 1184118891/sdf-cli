const fs = require('fs')
const ejs = require('ejs')

const createFile = async (filePath, fileName, dirPath, data) => {
	fs.promises.opendir(dirPath)
		.catch(err => {
			if(err.code === 'ENOENT') {
				fs.mkdirSync(dirPath, {recursive: true}, () => {})
			}
		})
		.finally(() => {
			fs.writeFile(filePath, data || '', {encoding: 'utf-8'}, err => {
				if(err) {
					console.log('组件创建失败'.red)
				}else {
					console.log(`${fileName}创建成功`.green)
				}
			})
		})
}

// 编译ejs模版

const compile = (str, data) => {
	return ejs.render(str, {data})
}

module.exports = {
	createFile, 
	compile
}