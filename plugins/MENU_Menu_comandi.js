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
let speed = neww - old
let text = `

✦✧✧𝓜𝓸𝓸𝓷 𝓑𝓸𝓽✧✧✦

┌──⭓ *𝐍𝐎𝐕𝐈𝐓𝐀'*
│➤  ${usedPrefix}spotify (+ nome song) '𝓷𝓮𝔀
│➤  ${usedPrefix}deletesesion (4err 'wait message') '𝓷𝓮𝔀
│➤  ${usedPrefix}aii (+ richiesta) '𝓷𝓮𝔀
│➤  ${usedPrefix}ai_voce (+ richiesta) '𝓷𝓮𝔀
│➤  ${usedPrefix}muta (+ user) '𝓷𝓮𝔀
│➤  ${usedPrefix}mutetime (+ m/h + user) '𝓷𝓮𝔀
│➤  ${usedPrefix}smuta (+ user) '𝓷𝓮𝔀
│➤  ${usedPrefix}cartoon'𝓷𝓮𝔀
│➤  ${usedPrefix}attiva chatbot 
│➤  ${usedPrefix}abbraccio + @
│➤  ${usedPrefix}schiaffo + @
│➤  ${usedPrefix}trigger + @
│➤  ${usedPrefix}txt/txt1 + (txt)
│➤  ${usedPrefix}bal (checkativo)
│➤  ${usedPrefix}top messaggi
│➤  ${usedPrefix}gruppi messaggi
│➤  ${usedPrefix}gatto
│➤  ${usedPrefix}toanime
│➤  ${usedPrefix}bluur
│➤  ${usedPrefix}bonk
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

┌──⭓ 𝐆𝐑𝐔𝐏𝐏𝐎 
│➤ ${usedPrefix}kick / addio / ban @
│➤ ${usedPrefix}warn @
│➤ ${usedPrefix}unwarn @
│➤ ${usedPrefix}cringe @ '𝓷𝓮𝔀
│➤ ${usedPrefix}muta (+ user) '𝓷𝓮𝔀
│➤ ${usedPrefix}mutetime (+ m/h + user) '𝓷𝓮𝔀
│➤ ${usedPrefix}smuta (+ user) '𝓷𝓮𝔀
│➤ ${usedPrefix}bal (countmsg) @ '𝓷𝓮𝔀
│➤ ${usedPrefix}top messaggi '𝓷𝓮𝔀
│➤ ${usedPrefix}classifica '𝓷𝓮𝔀
│➤ ${usedPrefix}gruppi messaggi '𝓷𝓮𝔀
│➤ ${usedPrefix}del (msg)
│➤ ${usedPrefix}stermina +92
│➤ ${usedPrefix}listanum +1
│➤ ${usedPrefix}link
│➤ ${usedPrefix}reimposta
│➤ ${usedPrefix}hidetag (txt)
│➤ ${usedPrefix}tagall / marcar (txt)
│➤ ${usedPrefix}inattivi
│➤ ${usedPrefix}viainattivi
│➤ ${usedPrefix}promuovi / mettiadmin @
│➤ ${usedPrefix}retrocedi / togliadmin @
│➤ ${usedPrefix}gruppo aperto / chiuso
│➤ ${usedPrefix}nome (txt)
│➤ ${usedPrefix}setbenvenuto (@user txt)
│➤ ${usedPrefix}setaddio (@user txt)
│➤ ${usedPrefix}admin
│➤ ${usedPrefix}ping
└───────⭓

════ •⊰❂⊱• ════ 

┌──⭓ 𝐌𝐄𝐃𝐈𝐀
│➤ ${usedPrefix}attp (txt)
│➤ ${usedPrefix}ttp (txt)
│➤ ${usedPrefix}gtts (txt)
│➤ ${usedPrefix}dado
│➤ ${usedPrefix}sticker / s (foto/video)
│➤ ${usedPrefix}wm (sticker)
│➤ ${usedPrefix}emojimix (emoji+emoji)
│➤ ${usedPrefix}pinterest / cerca 
│➤ ${usedPrefix}whatmusic (audio)
│➤ ${usedPrefix}qrcode (txt)
│➤ ${usedPrefix}leggi (foto)
│➤ ${usedPrefix}styletext (txt)
│➤ ${usedPrefix}destrava
│➤ ${usedPrefix}tovideo (sticker)
│➤ ${usedPrefix}togif (sticker)
│➤ ${usedPrefix}togifaud (video)
│➤ ${usedPrefix}tomp3 (video/audio)
│➤ ${usedPrefix}toaudio (video/audio)
│➤ ${usedPrefix}toptt (video)
│➤ ${usedPrefix}tourl (foto/video)
└───────⭓

 ════ •⊰❂⊱• ════ 

┌──⭓ 𝐋𝐎𝐆𝐇𝐈
│➤ ${usedPrefix}menuloghi
└───────⭓

 ════ •⊰❂⊱• ════ 
┌──⭓ 𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈
│➤ ${usedPrefix}gay @
│➤ ${usedPrefix}frocio @
│➤ ${usedPrefix}lesbica @
│➤ ${usedPrefix}puttana @
│➤ ${usedPrefix}puttaniere @
│➤ ${usedPrefix}nero @
│➤ ${usedPrefix}nera @
│➤ ${usedPrefix}random @
│➤ ${usedPrefix}amore @
│➤ ${usedPrefix}aii (AI)
│➤ ${usedPrefix}ai_voce (AI_voce)
│➤ ${usedPrefix}wikipedia (txt)
│➤ ${usedPrefix}meteo / tempo (città)
│➤ ${usedPrefix}dox @
│➤ ${usedPrefix}topgays
│➤ ${usedPrefix}topscimmie
│➤ ${usedPrefix}slot
│➤ ${usedPrefix}calc (1+1)
│➤ ${usedPrefix}autoadmin
│➤ ${usedPrefix}ruba (admin) '𝓷𝓮𝔀
│➤ ${usedPrefix}regalo (admin) '𝓷𝓮𝔀
│ regalo e ruba hanno effetto su tutti
│➤ ${usedPrefix}top messaggi '𝓷𝓮𝔀
│➤ ${usedPrefix}virus1/1/2/3ecc '𝓷𝓮𝔀
└───────⭓

 ════ •⊰❂⊱• ════ 

┌──⭓ 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎
│➤ ${usedPrefix}banuser @
│➤ ${usedPrefix}unbanuser @
│➤ ${usedPrefix}block @
│➤ ${usedPrefix}unblock @
│➤ ${usedPrefix}join
│➤ ${usedPrefix}out
│➤ ${usedPrefix}spamgp (link)
│➤ ${usedPrefix}cleartmp
│➤ ${usedPrefix}blocklist
│➤ ${usedPrefix}banlist
│➤ ${usedPrefix}banchat
│➤ ${usedPrefix}unbanchat
└───────⭓

════ •⊰❂⊱• ════ 

┌──⭓ 𝐀𝐓𝐓𝐈𝐕𝐀
│➤ ${usedPrefix}attiva/disabilita restrict
│➤ ${usedPrefix}attiva/disabilita antiprivato
│➤ ${usedPrefix}attiva/disabilita sologruppo
│➤ ${usedPrefix}attiva/disabilita autoread
│➤ ${usedPrefix}attiva/disabilita benvenuto
│➤ ${usedPrefix}attiva/disabilita antilink
│➤ ${usedPrefix}attiva/disabilita antilinkhttps
│➤ ${usedPrefix}attiva/disabilita antispam
│➤ ${usedPrefix}attiva/disabilita detect
│➤ ${usedPrefix}attiva/disabilita antielimina
│➤ ${usedPrefix}attiva/disabilita antiviewonce
│➤ ${usedPrefix}attiva/disabilita antitrava
│➤ ${usedPrefix}attiva/disabilita antipaki
│➤ ${usedPrefix}attiva/disabilita modoadmin
│➤ ${usedPrefix}attiva/disabilita autosticker
│➤ ${usedPrefix}attiva/disabilita chatbot
└───────⭓

════ •⊰❂⊱• ════ 

┌──⭓ 𝐈𝐍𝐒𝐓𝐀𝐋𝐋𝐀𝐑𝐄 𝐈𝐋 𝐁𝐎𝐓
│ඬ  .installa
└───✦✧✧𝐁Ꮻ𝐓 ✧✧✦ 
`.trim() 
conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false, )
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(comandi)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
