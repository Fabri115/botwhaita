import { WAMessageStubType } from '@adiwajshing/baileys'
import PhoneNumber from 'awesome-phonenumber'
import chalk from 'chalk'
import { watchFile } from 'fs'

const terminalImage = global.opts['img'] ? require('terminal-image') : ''
const urlRegex = (await import('url-regex-safe')).default({ strict: false })



let file = global.__filename(import.meta.url)
watchFile(file, () => {
console.log(chalk.redBright("Update 'lib/print.js'"))})
