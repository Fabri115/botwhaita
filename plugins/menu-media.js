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
const grup = './Menu2.jpg'
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(5)
let text = `


┌──⭓ 𝐌𝐄𝐃𝐈𝐀
│⭔ ${usedPrefix}attp (txt)
│⭔ ${usedPrefix}ttp (txt)
│⭔ ${usedPrefix}gtts (txt)
│⭔ ${usedPrefix}dado
│⭔ ${usedPrefix}sticker / s (foto/video)
│⭔ ${usedPrefix}wm (sticker)
│⭔ ${usedPrefix}emojimix (emoji+emoji)
│⭔ ${usedPrefix}spotify (canzone)
│⭔ ${usedPrefix}pinterest / cerca 
│⭔ ${usedPrefix}whatmusic (audio)
│⭔ ${usedPrefix}qrcode (txt)
│⭔ ${usedPrefix}leggi (foto)
│⭔ ${usedPrefix}styletext (txt)
│⭔ ${usedPrefix}destrava
│⭔ ${usedPrefix}tovideo (sticker)
│⭔ ${usedPrefix}togif (sticker)
│⭔ ${usedPrefix}togifaud (video)
│⭔ ${usedPrefix}tomp3 (video/audio)
│⭔ ${usedPrefix}toaudio (video/audio)
│⭔ ${usedPrefix}toptt (video)
│⭔ ${usedPrefix}tourl (foto/video)
└───────⭓
𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
✦✧✧𝐁Ꮻ𝐓 ✧✧✦ 
`.trim() 
conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false, )
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menumedia)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
