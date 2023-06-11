import fs from 'fs'
function handler(m, { conn }) {
let text = `pong frocetto`.trim()   
conn.reply(m.chat, text, m, {
})
}
handler.customPrefix = /(ping)/i
handler.command = new RegExp
export default handler