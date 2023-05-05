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
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(5)
let text = `

┌──⭓ *MENU NOVITA'*
│⭔ .spotify (+ nome song)
│⭔ .attiva chatbot 
│⭔ .abbraccio + @
│⭔ .schiaffo + @
│⭔ .trigger + @
│⭔ .txt/txt1 + (txt)
│⭔ .bal (checkativo)
│⭔ .top messaggi
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
conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false, )
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