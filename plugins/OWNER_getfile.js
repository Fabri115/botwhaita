import fs from 'fs'
import syntaxError from 'syntax-error'
import path from 'path'

const _fs = fs.promises

let handler = async (m, { text, usedPrefix, command, __dirname, args }) => {
    if (!text) throw `
✳️ Uso  : ${usedPrefix + command} <name file>

📌 Esempio:
        ${usedPrefix}getfile main.js
        ${usedPrefix}getplugin owner
`.trim()
let ar = Object.keys(plugins)
let ar1 = ar.map(v => v.replace('.js', ''))
if (!ar1.includes(args[0])) return m.reply(`*🗃️ non esiste questo plugin!*\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n${ar1.map(v => ' ' + v).join`\n`}`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
    if (/p(lugin)?/i.test(command)) {
        const filename = text.replace(/plugin(s)\//i, '') + (/\.js$/i.test(text) ? '' : '.js')
        const pathFile = path.join(__dirname, filename)
        const file = await _fs.readFile(pathFile, 'utf8')
        m.reply(file)
        const error = syntaxError(file, filename, {
            sourceType: 'module',
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
        })
        if (error) {
            await m.reply(`
❎ Errore nel file  *${filename}*:

${error}

`.trim())
        }

    } else {
        const isJavascript = /\.js/.test(text)
        if (isJavascript) {
            const file = await _fs.readFile(text, 'utf8')
            m.reply(file)
            const error = syntaxError(file, text, {
                sourceType: 'module',
                allowReturnOutsideFunction: true,
                allowAwaitOutsideFunction: true
            })
            if (error) {
                await m.reply(`
❎ Errore in *${text}*:

${error}

`.trim())
            }
        } else {
            const file = await _fs.readFile(text, 'base64')
            await m.reply(Buffer.from(file, 'base64'))
        }
    }
}
handler.help = ['plugin', 'file'].map(v => `get${v} <name file>`)
handler.tags = ['owner']
handler.command = /^g(et)?(p(lugin)?|f(ile)?)$/i

handler.rowner = false

export default handler
