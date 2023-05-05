import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix , command }) => {
if (!text) return
try {
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
return
}}
handler.command = /^(ia)$/i
export default handler
