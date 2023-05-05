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

┌──⭓ *ATTIVA|DISATTIVA*
│⭔ ${usedPrefix}attiva/disabilita restrict
│⭔ ${usedPrefix}attiva/disabilita antiprivato
│⭔ ${usedPrefix}attiva/disabilita sologruppo
│⭔ ${usedPrefix}attiva/disabilita autoread
│⭔ ${usedPrefix}attiva/disabilita benvenuto
│⭔ ${usedPrefix}attiva/disabilita antilink
│⭔ ${usedPrefix}attiva/disabilita antilinkhttps
│⭔ ${usedPrefix}attiva/disabilita antispam
│⭔ ${usedPrefix}attiva/disabilita detect
│⭔ ${usedPrefix}attiva/disabilita antielimina
│⭔ ${usedPrefix}attiva/disabilita antiviewonce
│⭔ ${usedPrefix}attiva/disabilita antitrava
│⭔ ${usedPrefix}attiva/disabilita antipaki
│⭔ ${usedPrefix}attiva/disabilita modoadmin
│⭔ ${usedPrefix}attiva/disabilita autosticker
│⭔ ${usedPrefix}attiva/disabilita chatbot
└───────⭓
𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
✦✧✧𝐁Ꮻ𝐓 ✧✧✦ 
`.trim() 
conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false, )
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menuattiva)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
