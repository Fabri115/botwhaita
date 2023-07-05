import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
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
let speed = (neww - old).toFixed(5)
let prova = {"key": {
"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast","fromMe": false, "id": "Halo"
}, "message": {
"contactMessage": { displayName: '𝑴𝒐𝒐𝒏𝑪𝒍𝒐𝒖𝒅𝒔⇝ ꪶ͢𝑴☁️ꫂ ᵉᵈᶦᶻ ²⁰²³',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
let text = `

┌──⭓ *MENU NOVITA'*
│ඬ  ${usedPrefix}spotify (+ nome song) '𝓷𝓮𝔀
│ඬ  ${usedPrefix}aii (+ richiesta) '𝓷𝓮𝔀
│ඬ  ${usedPrefix}ai_voce (+ richiesta) '𝓷𝓮𝔀
│ඬ  ${usedPrefix}muta (+ user) '𝓷𝓮𝔀
│ඬ  ${usedPrefix}mutetime (+ m/h + user) '𝓷𝓮𝔀
│ඬ  ${usedPrefix}smuta (+ user) '𝓷𝓮𝔀
│ඬ  ${usedPrefix}attiva chatbot 
│ඬ  ${usedPrefix}abbraccio + @
│ඬ  ${usedPrefix}schiaffo + @
│ඬ  ${usedPrefix}trigger + @
│ඬ  ${usedPrefix}txt/txt1 + (txt)
│ඬ  ${usedPrefix}bal (checkativo)
│ඬ  ${usedPrefix}top messaggi
│ඬ  ${usedPrefix}gruppi messaggi
│ඬ  ${usedPrefix}gatto
│ඬ  ${usedPrefix}toanime
│ඬ  ${usedPrefix}cartoon'𝓷𝓮𝔀
│ඬ  ${usedPrefix}bluur
│ඬ  ${usedPrefix}bonk
└───────⭓

┌──⭓ *MENU 'FABRI'*
|- fabri funziona senza uso
|  di prefisso.
|  per attivarlo:
|ඬ  ON: sveglia fabri 
|ඬ  OFF: dormi fabri 
└───────⭓

┌──⭓ *MENU 'RISPOSTA'*
│ඬ  insulta + @
│ඬ   minaccia + @ 
│ඬ  zizzania + @
│ඬ  segreto + @
│ඬ  bestemmia
│ඬ  moneta (testa o croce)
└───────⭓
┌──⭓ *MENU 'AUDIO'*
|ඬ  Drama|Fail|Game Over|TG5
│ඬ  Timida|Ma che fai|rutto
│ඬ  Sei una monella|Soddisfazione
│ඬ  Io pago|Renzi|Rosario Muniz
│ඬ  Mio figlio poteva morire|Dio cancaro
└───────⭓
┌──⭓ *MENU 'STICKER'*
│ඬ  Steve Jobs
│ඬ  Non ci sono
│ඬ  Banana
|ඬ  Cesso
└───────⭓
𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
✦✧✧𝐁Ꮻ𝐓 ✧✧✦ 
`.trim() 
conn.reply(m.chat, text, prova, m, false, )

}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(news)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
