import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) return
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
return
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(nome)$/i
handler.group = true
handler.admin = true
export default handler
