const {program} = require('commander')
const {createFile, compile} = require('./utils')

const path = require('path')
const fs = require('fs')

require('colors')

const createFileActionAction = (fileName, dirPath) => {
  const fileNameArr = fileName.split('.')
	fileName = fileNameArr[0][0].toUpperCase() + fileName[0].slice(1)
	dirPath = path.resolve((dirPath || program['defPath']), fileName)
	let jsExt = fileNameArr[1]
	if(!jsExt) {
		jsExt = program['jsExt']
	}
	const cssExt = program['cssExt']
	const jsFilePath = path.resolve(dirPath, `${fileName}.${jsExt}`)
	const cssFilePath = path.resolve(dirPath, `${fileName}.${cssExt}`)
	fs.promises.readFile(path.resolve(__dirname, '../templates/rax.ejs'),{encoding: 'utf-8'})
		.then(str => {
			const compileJstem = compile(str, {fileName})
			createFile(jsFilePath, `${fileName}.${jsExt}`, dirPath, compileJstem)
			createFile(cssFilePath, `${fileName}.${cssExt}`, dirPath)
		})
		.catch(err => {
			console.log(err.red)
			console.log('创建组件失败'.red)
		})
}

module.exports = {
	createFileActionAction,
}