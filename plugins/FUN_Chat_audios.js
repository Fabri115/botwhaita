//▪CÓDIGO BY ALBERTO9883 PRROS XD▪
//▪NyanCatBot - MD▪

import MessageType from '@adiwajshing/baileys'
import util from 'util'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

let handler = m => m

handler.before = async function (m, { conn, command, MessageType, text, usedPrefix }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[who]

if ((m.isBaileys && m.fromMe) || m.fromMe ) return true

if (chat.chatbot) {
//━━━━━━━━◜🌾Textos🌾◞━━━━━━━━
let audio1A = /donn|Mujer|wom|Wom/i
let audio1B = audio1A.exec(m.text)

let audio5A = /kit|kitsune/i
let audio5B = audio5A.exec(m.text)

let audio2A = /10secondi/i
let audio2B = audio2A.exec(m.text)

let audio3A = /achi zitta/i
let audio3B = audio3A.exec(m.text)

let audio4A = /gianpaolo/i
let audio4B = audio4A.exec(m.text)

let audio6A = /porco/i
let audio6B = audio6A.exec(m.text)

let audio7A = /germanomosconi/i
let audio7B = audio7A.exec(m.text)

let audio8A = /happyhippo/i
let audio8B = audio8A.exec(m.text)

let audio9A = /achi buongiorno/i
let audio9B = audio9A.exec(m.text)

let audio10A = /gacha/i
let audio10B = audio10A.exec(m.text)
//━━━━━━━━━━━━━━━━━━━━━━━


//━━━━━━━◜🍁Respuestas🍁◞━━━━━━━
if (audio1B) {
	let vn = './storage/mp3/women.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })

	} else
		
if (audio5B) {
	let vn = './storage/mp3/kitsune.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })

	} else
		
if (audio6B) {
	let vn = './storage/mp3/Germano Mosconi - Porco dio.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })

	} else
		
if (audio7B) {
	let vn = './storage/mp3/Mosconi - Ma che oooh (COMPLETO).mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })

	} else
		
if (audio8B) {
	let vn = './storage/mp3/HAPPY HIPPO FREESTYLE.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })

	} else
		
if (audio9B) {
	let vn = './storage/mp3/achi-buongiorno.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })

	} else
		
if (audio10B) {
	let vn = './storage/mp3/Diss Gacha - BALLAS RMX ft MamboLosco, Janga ODT - prod. Sala.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })

	} else
       
if (audio2B) {
	let vn = './storage/mp3/Conto alla Rovescia 10 secondi Italiano Countdown 10 seconds ITA.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })
	
        } else
	
if (audio3B) {
	let vn = './storage/mp3/achizitta2.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
	conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })
	} else
	
if (audio4B) {
	let vn = './storage/mp3/Orgasmi.mp3'
	await conn.sendPresenceUpdate('recording', m.chat)
        conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null, "sourceUrl": `pornuhub`, "showAdAttribution": true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })
	} 
//━━━━━━━━━━━━━━━━━━━━━━━
}
return !0

}

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
