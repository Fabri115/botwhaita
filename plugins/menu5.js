import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
try {
const buttons = [
{ buttonId: `${usedPrefix}installa`, buttonText: { displayText: '𝐈𝐍𝐒𝐓𝐀𝐋𝐋𝐀𝐑𝐄 𝐈𝐋 𝐁𝐎𝐓' }, type: 1 },
{ buttonId: `${usedPrefix}menuloghi`, buttonText: { displayText: '𝐌ΞИ𝐔 𝐋𝐎𝐆𝐇𝐈 🎨' }, type: 1 }, ]    
let texto1 = `┌──⭓ ✧ 𝐌ΞИ𝐔🛡️⃟🏴‍☠ 𝐁Ꮻ𝐓 ✧
│⭔ ${usedPrefix}kick / addio / ban @
│⭔ ${usedPrefix}warn @
│⭔ ${usedPrefix}unwarn @
│⭔ ${usedPrefix}del (msg)
│⭔ ${usedPrefix}stermina +92
│⭔ ${usedPrefix}listanum +1
│⭔ ${usedPrefix}attiva/disabilita benvenuto
│⭔ ${usedPrefix}attiva/disabilita antilink
│⭔ ${usedPrefix}attiva/disabilita antilinkhard
│⭔ ${usedPrefix}attiva/disabilita antispam
│⭔ ${usedPrefix}attiva/disabilita detect
│⭔ ${usedPrefix}attiva/disabilita antielimina
│⭔ ${usedPrefix}attiva/disabilita antiviewonce
│⭔ ${usedPrefix}attiva/disabilita antitrava
│⭔ ${usedPrefix}attiva/disabilita antipaki
│⭔ ${usedPrefix}attiva/disabilita modoadmin
│⭔ ${usedPrefix}attiva/disabilita autosticker
│⭔ ${usedPrefix}link
│⭔ ${usedPrefix}reimposta
│⭔ ${usedPrefix}hidetag (txt)
│⭔ ${usedPrefix}tagall / marcar (txt)
│⭔ ${usedPrefix}inattivi
│⭔ ${usedPrefix}viainattivi
│⭔ ${usedPrefix}promuovi / mettiadmin @
│⭔ ${usedPrefix}retrocedi / togliadmin @
│⭔ ${usedPrefix}gruppo aperto / chiuso
│⭔ ${usedPrefix}aperto / chiuso
│⭔ ${usedPrefix}nome (txt)
│⭔ ${usedPrefix}setbenvenuto (@user txt)
│⭔ ${usedPrefix}setaddio (@user txt)
│⭔ ${usedPrefix}admin
│⭔ ${usedPrefix}ping
│⭔ ${usedPrefix}menu
│⭔ ${usedPrefix}allmenu
│⭔ ${usedPrefix}attp (txt)
│⭔ ${usedPrefix}attp3 (txt)
│⭔ ${usedPrefix}ttp (txt)
│⭔ ${usedPrefix}ttp2 (txt)
│⭔ ${usedPrefix}ttp5 (txt)
│⭔ ${usedPrefix}gtts (txt)
│⭔ ${usedPrefix}dado
│⭔ ${usedPrefix}sticker / s (foto/video)
│⭔ ${usedPrefix}wm (sticker)
│⭔ ${usedPrefix}emojimix (emoji+emoji)
│⭔ ${usedPrefix}play (canzone)
│⭔ ${usedPrefix}playdoc (canzone)
│⭔ ${usedPrefix}playlist (canzone)
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
│⭔ ${usedPrefix}gay @
│⭔ ${usedPrefix}frocio @
│⭔ ${usedPrefix}lesbica @
│⭔ ${usedPrefix}puttana @
│⭔ ${usedPrefix}puttaniere @
│⭔ ${usedPrefix}nero @
│⭔ ${usedPrefix}nera @
│⭔ ${usedPrefix}random @
│⭔ ${usedPrefix}amore @
│⭔ ${usedPrefix}andre (AI)
│⭔ ${usedPrefix}wikipedia (txt)
│⭔ ${usedPrefix}dox @
│⭔ ${usedPrefix}topgays
│⭔ ${usedPrefix}topnazi
│⭔ ${usedPrefix}slot
│⭔ ${usedPrefix}calc (1+1)
│⭔ ${usedPrefix}abdul
│⭔ ${usedPrefix}drix
│⭔ ${usedPrefix}roax
│⭔ ${usedPrefix}poison
│⭔ ${usedPrefix}maschere
│⭔ ${usedPrefix}polter
│⭔ ${usedPrefix}fidcat
│⭔ ${usedPrefix}giada
│⭔ ${usedPrefix}meli
│⭔ ${usedPrefix}autoadmin
│⭔ ${usedPrefix}attiva/disabilita restrict
│⭔ ${usedPrefix}attiva/disabilita antiprivato
│⭔ ${usedPrefix}attiva/disabilita sologruppo
│⭔ ${usedPrefix}attiva/disabilita autoread
│⭔ ${usedPrefix}prefisso (nuovo prefisso)
│⭔ ${usedPrefix}banuser @
│⭔ ${usedPrefix}unbanuser @
│⭔ ${usedPrefix}block @
│⭔ ${usedPrefix}unblock @
│⭔ ${usedPrefix}join (link)
│⭔ ${usedPrefix}out
│⭔ ${usedPrefix}creagruppo (nome)
│⭔ ${usedPrefix}nuke
│⭔ ${usedPrefix}spamgp (link)
│⭔ ${usedPrefix}cleartmp
│⭔ ${usedPrefix}blocklist
│⭔ ${usedPrefix}banlist
│⭔ ${usedPrefix}banchat
│⭔ ${usedPrefix}unbanchat
└───────⭓`
const buttonMessage = { image: fs.readFileSync("./Menu2.jpg"), caption: texto1, footer: '✦✧✧ 𝐄ИΞM𝕀Ξ𝐒🛡️⃟🏴‍☠ 𝐁Ꮻ𝐓 ✧✧✦', buttons: buttons, headerType: 4 }
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {  
return}}
handler.help = ['menu'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^allmenu$/i
export default handler
