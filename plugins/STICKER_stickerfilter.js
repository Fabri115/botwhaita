import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@whiskeysockets/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
uso del comando
${usedPrefix}stickerfilter (effetto) 
rispondi a una foto
Lista effetti
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) 
if (!/image\/(jpe?g|png)/.test(mime)) 
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply('errore')
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickerfilter|stikerfilter|cs2)$/i
export default handler
