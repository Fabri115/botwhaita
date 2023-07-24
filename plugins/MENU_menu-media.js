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
│✏︎  ${usedPrefix} 𝒂𝒕𝒕𝒑 (𝒕𝒙𝒕)
│✏︎  ${usedPrefix} 𝒕𝒕𝒑 (𝒕𝒙𝒕)
│✏︎  ${usedPrefix} 𝒈𝒕𝒕𝒔 (𝒕𝒙𝒕)
│✏︎  ${usedPrefix} 𝒅𝒂𝒅𝒐
│✏︎  ${usedPrefix} 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 / 𝒔 (𝒇𝒐𝒕𝒐/𝒗𝒊𝒅𝒆𝒐)
│✏︎  ${usedPrefix} 𝒘𝒎 (𝒔𝒕𝒊𝒄𝒌𝒆𝒓)
│✏︎  ${usedPrefix} 𝒆𝒎𝒐𝒋𝒊𝒎𝒊𝒙 (𝒆𝒎𝒐𝒋𝒊+𝒆𝒎𝒐𝒋𝒊)
│✏︎  ${usedPrefix} 𝒔𝒑𝒐𝒕𝒊𝒇𝒚 (𝒄𝒂𝒏𝒛𝒐𝒏𝒆)
│✏︎  ${usedPrefix} 𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕 / 𝒄𝒆𝒓𝒄𝒂 
│✏︎  ${usedPrefix} 𝒘𝒉𝒂𝒕𝒎𝒖𝒔𝒊𝒄 (𝒂𝒖𝒅𝒊𝒐)
│✏︎  ${usedPrefix} 𝒒𝒓𝒄𝒐𝒅𝒆 (𝒕𝒙𝒕)
│✏︎  ${usedPrefix} 𝒍𝒆𝒈𝒈𝒊 (𝒇𝒐𝒕𝒐)
│✏︎  ${usedPrefix} 𝒔𝒕𝒚𝒍𝒆𝒕𝒆𝒙𝒕 (𝒕𝒙𝒕)
│✏︎  ${usedPrefix} 𝒅𝒆𝒔𝒕𝒓𝒂𝒗𝒂
│✏︎  ${usedPrefix} 𝒕𝒐𝒗𝒊𝒅𝒆𝒐 (𝒔𝒕𝒊𝒄𝒌𝒆𝒓)
│✏︎  ${usedPrefix} 𝒕𝒐𝒈𝒊𝒇 (𝒔𝒕𝒊𝒄𝒌𝒆𝒓)
│✏︎  ${usedPrefix} 𝒕𝒐𝒈𝒊𝒇𝒂𝒖𝒅 (𝒗𝒊𝒅𝒆𝒐)
│✏︎  ${usedPrefix} 𝒕𝒐𝒎𝒑𝟑 (𝒗𝒊𝒅𝒆𝒐/𝒂𝒖𝒅𝒊𝒐)
│✏︎  ${usedPrefix} 𝒕𝒐𝒂𝒖𝒅𝒊𝒐 (𝒗𝒊𝒅𝒆𝒐/𝒂𝒖𝒅𝒊𝒐)
│✏︎  ${usedPrefix} 𝒕𝒐𝒑𝒕𝒕 (𝒗𝒊𝒅𝒆𝒐)
│✏︎  ${usedPrefix} 𝒕𝒐𝒖𝒓𝒍 (𝒇𝒐𝒕𝒐/𝒗𝒊𝒅𝒆𝒐)
│✏︎  𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
└────*𝑩𝑶𝑻𝑾𝑯𝑨𝑰𝑻𝑨 V${vs}*
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
