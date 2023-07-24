let handler = m => m
handler.all = async function (m) {
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
if (/^moneta|testa o croce$/i.test(m.text)) {
let sticker = `./Media/Moneta/${pickRandom(["01", "02"])}.webp`
return await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m)
}}
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}