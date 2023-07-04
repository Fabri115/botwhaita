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
│⭔ .spotify (+ nome song)
│⭔ .muta @user
│⭔ .smuta @user 
│⭔ .mutati (lista)
│⭔ .attiva chatbot 
│⭔ .abbraccio + @
│⭔ .schiaffo + @
│⭔ .toanime @foto
│⭔ .txt/txt1 + (txt)
│⭔ .bal (checkativo)
│⭔ .classifica
│⭔ .gruppi messaggi
│⭔ .gatto
│⭔ .anime
│⭔ .bluur
│⭔ .bonk
└───────⭓

┌──⭓ *MENU 'FABRI'*
|- fabri funziona senza uso
|  di prefisso.
|  per attivarlo:
|⭔ ON: sveglia fabri 
|⭔ OFF: dormi fabri 
└───────⭓

┌──⭓ *MENU 'RISPOSTA'*
│⭔ insulta + @
│⭔ minaccia + @ 
│⭔ zizzania + @
│⭔ segreto + @
│⭔ bestemmia
│⭔ moneta (testa o croce)
└───────⭓
┌──⭓ *MENU 'AUDIO'*
|⭔ Drama|Fail|Game Over|TG5
│⭔ Timida|Ma che fai|rutto
│⭔ Sei una monella|Soddisfazione
│⭔ Io pago|Renzi|Rosario Muniz
│⭔ Mio figlio poteva morire|Dio cancaro
└───────⭓
┌──⭓ *MENU 'STICKER'*
│⭔ Steve Jobs
│⭔ Non ci sono
│⭔ Banana
|⭔ Cesso
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
