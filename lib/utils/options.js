const {pragram, program} = require('commander')

const path = require('path')
const fs = require('fs')

const createOptions = () => {
  const {version} = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, '../../package.json')
	))
	
	program
		.version(version, '-v,--version', '版本信息')
		.usage('使用方法')
		.option('--js-ext <type>', 'js文件类型', 'js')
		.option('--cs-ext <type>', 'css文件类型', 'css')
		.option('--def-path <path>', '创建组件默认路径', 'src/mobile/components')
		.parse(process.argv)
}

module.exports = createOptions