#!/usr/bin/env Node

const {program, createOption, createCommand} = require("commander")

const reateOptions = require('../lib/utils/options')
const reateCommands = require('../lib/utils/commands')

// 创建options
createOptions()

// 创建commandscommands
createCommands()

program.parse(process.argv)