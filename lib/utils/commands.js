const program = require('./program')

const {createFileAction} = require('./actions')
const { program } = require('commander')

const createCommands = () => {
	program
		.command('addcmp <fileName> [filePath]')
		.descriptions('创建组件')
		.action(createFileAction)
}

module.exports = createCommands