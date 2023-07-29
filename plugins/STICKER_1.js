let handler = m => m
handler.all = async function (m) {
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
if (/^steve|steve jobs$/i.test(m.text)) {
let sticker = `./Media/Sticker/Steve.webp`
return await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m)
}
if (/^cesare$/i.test(m.text)) {
let sticker = `./Media/Sticker/Cesare.webp`
return await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m)
}
if (/^moon|ci$/i.test(m.text)) {
let sticker = `./Media/Sticker/mi.webp.jpg`
await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m)
}
if (/^minions|banana$/i.test(m.text)) {
let sticker = `./Media/Sticker/Minions${pickRandom(["1", "2", "3", "4"])}.webp`
return await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m)
}
if (/^cesso|wc|bagno$/i.test(m.text)) {
let sticker = `./Media/Sticker/WC${pickRandom(["1", "2", "3", "4"])}.webp`
return await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m)
}}
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

