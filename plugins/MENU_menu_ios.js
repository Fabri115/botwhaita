/*import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, users, chatupdate }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `OH BUON GIORNOO!`
  if (time >= 4) {
    res = `OH BUON GIORNO!`
  }
  if (time >= 11) {
    res = `OH BUON POMERIGGIO!`
  }
  if (time >= 15) {
    res = `OH BUON SERA`
  }
  if (time >= 17) {
    res = `OH BUONA NOTTE`
  }}
let pp = './src/admins.jpg'
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, diamond, registered, self, level, role } = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
giorno: 'numeric',
mese: 'long',
anno: 'numeric'
}) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(4)
 
const sections = [  
{
title: `✦ 𝐌ΞИ𝐔𝐁Ꮻ𝐓  ✦ ✨ seleziona qui bro`,
rows: [
       {title: "𝑪𝒐𝒖𝒏𝒕𝑴𝒆𝒔𝒔𝒂𝒈𝒆", description: "mostra la top 50 degli utenti con piu messaggi", rowId: `${usedPrefix}top messaggi`},
{title: "𝑪𝒐𝒖𝒏𝒕𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝑮𝒓𝒖𝒑𝒑𝒐", description: "mostra la top 5 dei gruppi con piu messaggi", rowId: `${usedPrefix}gruppi messaggi`},
       {title: "𝑴𝒆𝒏𝒖𝑮𝒓𝒖𝒑𝒑𝒐", description: "mostra le funzioni per i gruppi", rowId: `${usedPrefix}menugruppo`},
        {title: "𝒎𝒆𝒏𝒖 𝒎𝒆𝒅𝒊𝒂", description: "mostra le funzioni per i media", rowId: `${usedPrefix}menumedia`},
         {title: "𝒎𝒆𝒏𝒖 𝒑𝒓𝒐𝒑𝒓𝒊𝒆𝒕𝒂𝒓𝒊𝒐", description: "mostra le funzioni per i proprietari del bot", rowId: `${usedPrefix}menuowner`},
         {title: "𝒎𝒆𝒏𝒖 𝒂𝒕𝒕𝒊𝒗𝒂", description: "mostra le funzioni attiva e disattiva del bot", rowId: `${usedPrefix}on`},
{title: "𝒎𝒆𝒏𝒖 𝒂𝒖𝒅𝒊𝒐", description: "mostra le funzioni per modificare la voce", rowId: `${usedPrefix}menuaudio`},
        {title: "𝒄𝒓𝒆𝒂𝒕𝒐𝒓𝒆", description: "numero del creatore", rowId: `${usedPrefix}owner`},
        {title: "𝒎𝒆𝒏𝒖 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒐", description: "per vedere tutti le funzioni del bot", rowId: `${usedPrefix}menu3`},
      {title: "𝒔𝒕𝒂𝒕𝒐", description: "per controllare da quanto è attivo il bot", rowId: `${usedPrefix}rt`},
      {title: "𝒈𝒓𝒖𝒑𝒑𝒊", description: "mostra i gruppi del bot", rowId: `${usedPrefix}grupos`},
      {title: "𝒑𝒊𝒏𝒈", description: "mostra la super velocità del bot", rowId: `${usedPrefix}ping`},
      {title: "𝒉𝒊𝒅𝒆𝒕𝒂𝒈", description: "per menzionare tutti con un testo predefinito", rowId: `${usedPrefix}hidetag`},
      {title: "𝒕𝒂𝒈𝒂𝒍𝒍", description: "per menzionare tutti in una lista", rowId: `${usedPrefix}tagall`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `╭┄〔 ≪ •🌐• ≫ 〕┄⊱
┆*_user: ${name}_*
┆*_ora: ${time}_*
┆*_data: ${date}_*   
┆*_attivato da: ${uptime}_*
┆*_versione del bot: ${vs}_*
┆*_ping: ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢_*`,
title: null,
buttonText: "*✦ 𝐌ΞИ𝐔𝐁Ꮻ𝐓  ✦ ✨*",
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.tags = ['group', 'owner']
handler.command = /^(menuios)$/i
export default handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)*/

