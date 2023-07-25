/*
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let taguser = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs

let pareja = global.db.data.users[m.sender].pasangan
let { exp, limit, dolares, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

const sections = [{
title: comienzo + ' ' + ['smsLista1']() + ' ' + fin,
rows: [
{title: "│🌐│MINECRAFT-SERVER", rowId:`${usedPrefix}mc-server`},  
{title: ['smsLista2'](), rowId:`${usedPrefix}creator`},  
{title: ['smsLista3'](), rowId:`${usedPrefix}infobot`},
{title: ['smsDonar'](), rowId:`${usedPrefix}donar`},
{title: ['smsLista4'](), rowId:`${usedPrefix}allmenu`},
{title: ['smsLista5'](), rowId:`${usedPrefix}grupos`},
{title: ['smsLista6'](), rowId:`${usedPrefix}jadibot`},
{title: ['smsLista7'](), rowId:`${usedPrefix}instalarbot`}

]},{
title: comienzo + ' ' + ['smsLista8']() + ' ' + fin,
rows: [
{title: ['smsLista9'](),  rowId: `${usedPrefix}lb`},
{title: ['smsLista10'](), rowId: `${usedPrefix}minar`},
{title: ['smsLista11'](), rowId: `${usedPrefix}work`},
{title: ['smsLista12'](), rowId: `${usedPrefix}inventory`},
{title: ['smsLista13'](), rowId: `${usedPrefix}rpgmenu`},
{title: ['smsLista14'](), rowId:  `${usedPrefix}buy limit 1`}
]},{	
title: comienzo + ' ' + ['smsLista15']() + ' ' + fin,
rows: [
{title: ['smsLista16'](), rowId: `${usedPrefix}descargasmenu`},
{title: ['smsLista17'](), rowId:`${usedPrefix}audios`},  
{title: ['smsLista18'](), rowId: `${usedPrefix}juegosdelgrupo`},
{title: ['smsLista19'](), rowId: `${usedPrefix}stickermenu`},
{title: ['smsLista20'](), rowId:`${usedPrefix}animemenu`},
{title: ['smsLista21'](), rowId:`${usedPrefix}soloparaelpropietario`},  
{title: ['smsLista22'](), rowId: `${usedPrefix}hornymenu`}
]},{	
title: comienzo + '🗂️ ENABLE/DISABLE ' + fin,
rows: [
{title: "│🕋│ENABLE MENU COMPLETO", rowId: `${usedPrefix}enable`},  
{title: "│✨│ENABLE WELCOME", rowId: `${usedPrefix}enable welcome`},
{title: "│✨│DISABLE WELCOME", rowId: `${usedPrefix}disable welcome`},
{title: "│🔗│ENABLE ANTILINK", rowId: `${usedPrefix}enable antilink`},  
{title: "│🔗│DISABLE ANTILINK", rowId: `${usedPrefix}disable antilink`},
{title: "│🧬│ENABLE ANTIARABES", rowId: `${usedPrefix}enable antiarabes`},    
{title: "│🧬│DISABLE ANTIARABES", rowId: `${usedPrefix}disable antiarabes`},
{title: "│🥵│ENABLE MODOHORNY", rowId: `${usedPrefix}enable modohorny`},
{title: "│🥵│DISABLE MODOHORNY", rowId: `${usedPrefix}disable modohorny`},
{title: "│⛔│ENABLE RESTRICT", rowId: `${usedPrefix}enable restrict`},
{title: "│⛔│DISABLE RESTRICT", rowId: `${usedPrefix}disable restrict`},
{title: "│📵│ENABLE ANTILLAMADA", rowId: `${usedPrefix}enable anticall`},
{title: "│📵│DISABLE ANTILLAMADA", rowId: `${usedPrefix}disable anticall`},   
{title: "│🎵│ENABLE AUDIOS", rowId: `${usedPrefix}enable audios`},
{title: "│🎵│DISABLE AUDIOS", rowId: `${usedPrefix}disable audios`}
]}]





let name = await conn.getName(m.sender)

//let name = conn.getName(m.sender)

const listMessage = {
      
text: `
*╭━━━━━❍${wm}❍━━━━━━╮*
*┃ 🏵️ ▢ ${ucapan()}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ 🔰 ▢ ${taguser}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ 💵 ▢ DOLARES:*
*┃ 💵 ▢ ${dolares}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ 💎 ▢ DIAMANTES:*
*┃ 💎 ▢ ${limit}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ ⏱️ ▢ Hora:*
*┃ ⌚ ▢ ${time}*   
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ ⌛ ▢ Tiempo activo:*
*┃ ⌛ ▢ ${uptime}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ 🛡️ ▢ Versión del bot:*
*┃ 🛡️ ▢ ${vs}*
*┃ ☯️ ▢ Librería:*
*┃ ☯️ ▢ ${library}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ 👥 ▢ Usuario(s):*
*┃ ⚡ ▢ ${Object.keys(global.db.data.users).length}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*╰━━━━━━━━━━━━━━━━━━╯*`, footer: `*${['smsPareja']()} ➢ ${pareja ? `${name} 😍 ${conn.getName(pareja)}` : `🙂 ${['smsResultPareja']()}`}*`, 
//${name} ${ucapan()}

title: null,

buttonText: "*selección | selection ✅*", 

sections }

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	

}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')

handler.tags = ['group', 'owner']

handler.command = /^(ff|\?)$/i

handler.exp = 20


export default handler

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "🌉Buenas madrugadas"

  if (time >= 4) {

    res = "🌇Buenos Días"

  }

  if (time >= 11) {

    res = "🏙️Buenas Tardes"

  }

  if (time >= 15) {

    res = "🌆Buenas tardes"

  }

  if (time >= 17) {

    res = "🌃Buenas noches"

  }

  return res

}
