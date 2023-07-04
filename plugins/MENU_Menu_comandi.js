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

✦✧✧𝐁Ꮻ𝐓✧✧✦

┌──⭓ *MENU NOVITA'*
│⭔ ${usedPrefix}spotify (+ nome song)
│⭔ ${usedPrefix}attiva chatbot 
│⭔ ${usedPrefix}abbraccio + @
│⭔ ${usedPrefix}schiaffo + @
│⭔ ${usedPrefix}trigger + @
│⭔ ${usedPrefix}txt/txt1 + (txt)
│⭔ ${usedPrefix}bal (checkativo)
│⭔ ${usedPrefix}top messaggi
│⭔ ${usedPrefix}gruppi messaggi
│⭔ ${usedPrefix}gatto
│⭔ ${usedPrefix}anime
│⭔ ${usedPrefix}bluur
│⭔ ${usedPrefix}bonk
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

┌──⭓ 𝐆𝐑𝐔𝐏𝐏𝐎
│ඬ ${usedPrefix}kick / addio / ban @
│ඬ ${usedPrefix}warn @
│ඬ ${usedPrefix}unwarn @
│ඬ ${usedPrefix}cringe @ '𝓷𝓮𝔀
│ඬ ${usedPrefix}bal (countmsg) @ '𝓷𝓮𝔀
│ඬ ${usedPrefix}top messaggi '𝓷𝓮𝔀
│ඬ ${usedPrefix}classifica '𝓷𝓮𝔀
│ඬ ${usedPrefix}gruppi messaggi '𝓷𝓮𝔀
│ඬ ${usedPrefix}del (msg)
│ඬ ${usedPrefix}stermina +92
│ඬ ${usedPrefix}listanum +1
│ඬ ${usedPrefix}attiva/disabilita benvenuto
│ඬ ${usedPrefix}attiva/disabilita antilink
│ඬ ${usedPrefix}attiva/disabilita antilinkhttps
│ඬ ${usedPrefix}attiva/disabilita antispam
│ඬ ${usedPrefix}attiva/disabilita detect
│ඬ ${usedPrefix}attiva/disabilita antielimina
│ඬ ${usedPrefix}attiva/disabilita antiviewonce
│ඬ ${usedPrefix}attiva/disabilita antitrava
│ඬ ${usedPrefix}attiva/disabilita antipaki
│ඬ ${usedPrefix}attiva/disabilita modoadmin
│ඬ ${usedPrefix}attiva/disabilita autosticker
│ඬ ${usedPrefix}link
│ඬ ${usedPrefix}reimposta
│ඬ ${usedPrefix}hidetag (txt)
│ඬ ${usedPrefix}tagall / marcar (txt)
│ඬ ${usedPrefix}inattivi
│ඬ ${usedPrefix}viainattivi
│ඬ ${usedPrefix}promuovi / mettiadmin @
│ඬ ${usedPrefix}retrocedi / togliadmin @
│ඬ ${usedPrefix}gruppo aperto / chiuso
│ඬ ${usedPrefix}nome (txt)
│ඬ ${usedPrefix}setbenvenuto (@user txt)
│ඬ ${usedPrefix}setaddio (@user txt)
│ඬ ${usedPrefix}admin
│ඬ ${usedPrefix}ping
└───────⭓

════ •⊰❂⊱• ════ 

┌──⭓ 𝐌𝐄𝐃𝐈𝐀
│ඬ ${usedPrefix}attp (txt)
│ඬ ${usedPrefix}ttp (txt)
│ඬ ${usedPrefix}gtts (txt)
│ඬ ${usedPrefix}dado
│ඬ ${usedPrefix}sticker / s (foto/video)
│ඬ ${usedPrefix}wm (sticker)
│ඬ ${usedPrefix}emojimix (emoji+emoji)
│ඬ ${usedPrefix}play (canzone)
│ඬ ${usedPrefix}playdoc (canzone)
│ඬ ${usedPrefix}playlist (canzone)
│ඬ ${usedPrefix}pinterest / cerca 
│ඬ ${usedPrefix}whatmusic (audio)
│ඬ ${usedPrefix}qrcode (txt)
│ඬ ${usedPrefix}leggi (foto)
│ඬ ${usedPrefix}styletext (txt)
│ඬ ${usedPrefix}destrava
│ඬ ${usedPrefix}tovideo (sticker)
│ඬ ${usedPrefix}togif (sticker)
│ඬ ${usedPrefix}togifaud (video)
│ඬ ${usedPrefix}tomp3 (video/audio)
│ඬ ${usedPrefix}toaudio (video/audio)
│ඬ ${usedPrefix}toptt (video)
│ඬ ${usedPrefix}tourl (foto/video)
└───────⭓

 ════ •⊰❂⊱• ════ 

┌──⭓ 𝐋𝐎𝐆𝐇𝐈
│ඬ ${usedPrefix}menuloghi
└───────⭓

 ════ •⊰❂⊱• ════ 
┌──⭓ 𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈
│ඬ ${usedPrefix}gay @
│ඬ ${usedPrefix}frocio @
│ඬ ${usedPrefix}lesbica @
│ඬ ${usedPrefix}puttana @
│ඬ ${usedPrefix}puttaniere @
│ඬ ${usedPrefix}nero @
│ඬ ${usedPrefix}nera @
│ඬ ${usedPrefix}random @
│ඬ ${usedPrefix}amore @
│ඬ ${usedPrefix}ia (AI)
│ඬ ${usedPrefix}wikipedia (txt)
│ඬ ${usedPrefix}meteo / tempo (città)
│ඬ ${usedPrefix}dox @
│ඬ ${usedPrefix}topgays
│ඬ ${usedPrefix}topscimmie
│ඬ ${usedPrefix}slot
│ඬ ${usedPrefix}calc (1+1)
│ඬ ${usedPrefix}autoadmin
│ඬ ${usedPrefix}ruba (admin) '𝓷𝓮𝔀
│ඬ ${usedPrefix}regalo (admin) '𝓷𝓮𝔀
│ regalo e ruba hanno effetto su tutti
│ඬ ${usedPrefix}top messaggi '𝓷𝓮𝔀
│ඬ ${usedPrefix}virus1/1/2/3ecc '𝓷𝓮𝔀
└───────⭓

 ════ •⊰❂⊱• ════ 

┌──⭓ 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎
│ඬ ${usedPrefix}attiva/disabilita restrict
│ඬ ${usedPrefix}attiva/disabilita antiprivato
│ඬ ${usedPrefix}attiva/disabilita sologruppo
│ඬ ${usedPrefix}attiva/disabilita autoread
│ඬ ${usedPrefix}banuser @
│ඬ ${usedPrefix}unbanuser @
│ඬ ${usedPrefix}block @
│ඬ ${usedPrefix}unblock @
│ඬ ${usedPrefix}join
│ඬ ${usedPrefix}out
│ඬ ${usedPrefix}spamgp (link)
│ඬ ${usedPrefix}cleartmp
│ඬ ${usedPrefix}blocklist
│ඬ ${usedPrefix}banlist
│ඬ ${usedPrefix}banchat
│ඬ ${usedPrefix}unbanchat
└───────⭓

════ •⊰❂⊱• ════ 

┌──⭓ 𝐈𝐍𝐒𝐓𝐀𝐋𝐋𝐀𝐑𝐄 𝐈𝐋 𝐁𝐎𝐓
│⭔ .installa
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
