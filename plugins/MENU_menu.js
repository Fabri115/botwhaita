import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, isPrems, groupMetadata }) => {
let pp = imagen4
let img =  './Menu2.jpg'
let locale = 'it'
let d = new Date(new Date + 3600000)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let totaluser = Object.values(global.db.data.users).length 
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)  
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
const grup = './no.png'
let name = await
conn.getName(m.sender)
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let prova ={ "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": true, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  

let text = `  *☁️𝑴𝒐𝒐𝒏𝑪𝒍𝒐𝒖𝒅𝒔⇝𝐁Ꮻ𝐓|mənū☁️*
┌──•✧𝑶𝒈𝒈𝒊✧•─────┐
┊─•✧*𝘿𝘼𝙏𝘼:* ${date}
┊─•✧*𝙊𝙍𝘼:* ${bottime}
└──── •✧✧• ────┘ 

┌──•✧𝑰𝒏𝒇𝒐 𝑼𝒕𝒆𝒏𝒕𝒆✧•─────┐
┊─•✧*𝑼𝙏𝑬𝙉𝙏𝑬: ${name} ✧* 
┊─•✧*𝑮𝙍𝙐𝙋𝙋𝙊:*
┊* _${groupMetadata.subject}_*
┊─•✧*𝙈𝙀𝙎𝙎𝘼𝑮𝑮𝑰: _${user.messaggi}_*
┊─•✧*𝙍𝘼𝙉𝑮𝙊: _${role}_*
└─── •✧✧• ────┘ 

┌─•✧𝑩𝑶𝑻 𝑰𝑵𝑭𝑶✧•──┐
┊─•✧*𝘽𝙊𝙏 𝙉𝘼𝙈𝙀:*${gt}
┊─•✧*𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬 𝘽𝙊𝙏:${vs}*
┊─•✧*𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈: 𝑳𝒊𝒏𝒖𝒙 *
┊─•✧*𝙋𝙍𝙀𝙁𝙄𝙓:* ${usedPrefix}
┊─•✧*𝙐𝙋𝙏𝙄𝙈𝙀:* ${uptime} 
┊─•✧*𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀:* ${rtotalreg} 𝑭𝑹𝑶𝑴 ${totaluser}
┊─•✧*𝑼𝙏𝑬𝙉𝙏𝙄 𝑻𝑶𝑻𝑨𝑳𝙄:* ${totaluser}
└─── •✧✧• ────┘

┌──*𝑪𝒐𝒎𝒂𝒏𝒅𝒊 𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍𝒊!*──┐
┊➤ ' ${usedPrefix} ' *𝑴𝑬𝑵𝑼𝑶𝑾𝑵𝑬𝑹*
┊➤ ' ${usedPrefix} ' *𝑴𝑬𝑵𝑼𝑨𝑻𝑻𝑰𝑽𝑨*
┊➤ ' ${usedPrefix} ' *𝑴𝑬𝑵𝑼𝑮𝑹𝑼𝑷𝑷𝑶*
┊➤ ' ${usedPrefix} ' *𝑴𝑬𝑵𝑼𝑨𝑼𝑫𝑰𝑶*
┊➤ ' ${usedPrefix} ' *𝑴𝑬𝑵𝑼𝑴𝑬𝑫𝑰𝑨*
┊➤ ' ${usedPrefix} ' *𝑪𝑶𝑴𝑨𝑵𝑫𝑰*
┊➤ ' ${usedPrefix} ' *𝑵𝑬𝑾𝑺*
└──𝑩𝑶𝑻𝑾𝑯𝑨𝑰𝑻𝑨 V${vs}

┌─*𝑱𝒐𝒊𝒏 𝒘𝒊𝒕𝒉 𝒖𝒔*
┊─• *𝑺𝒄𝒂𝒓𝒊𝒄𝒂𝒓𝒆 𝑴𝒐𝒐𝒏𝑪𝒍𝒐𝒖𝒅𝒔⇝𝐁Ꮻ𝐓*
┊ https://github.com/Fabri115/botwhaita.git
┊─• *𝑬𝒏𝒕𝒓𝒂 𝒊𝒏 𝐌ꮻꮻ𝖓☾︎ℓꮻ𝕦𝜕𝖘*
┊ https://chat.whatsapp.com/InZqSk4lsyzKJUtSWfsdjF 
┊─• *𝑻𝒖𝒕𝒐𝒓𝒊𝒂𝒍:*
┊ https://www.youtube.com/watch?v=6Cg1yUMz-Do
└── ⇝ *ꪶ͢𝑴☁️ꫂ ᵉᵈᶦᶻ ²⁰²³*`.trim() 
conn.reply(m.chat, text, prova, m, doc, false, )

}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
