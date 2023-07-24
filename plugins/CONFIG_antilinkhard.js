import fetch from 'node-fetch'
const isLink1 = /([A-Za-z]{1,50}).com\/([0-9A-Za-z]{2,250})/i
const isLink2 = /([A-Za-z]{1,50}).it\/([0-9A-Za-z]{2,250})/i
const isLink3 = /([A-Za-z]{1,50}).be\/([0-9A-Za-z]{2,250})/i
const isLink4 = /([A-Za-z]{1,50}).me\/([0-9A-Za-z]{2,250})/i
const isLink5 = /([A-Za-z]{1,50}).net\/([0-9A-Za-z]{2,250})/i

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isAntiLink1 = isLink1.exec(m.text)
const isAntiLink2 = isLink2.exec(m.text)
const isAntiLink3 = isLink3.exec(m.text)
const isAntiLink4 = isLink4.exec(m.text)
const isAntiLink5 = isLink5.exec(m.text)
const play1 = `ytmp3`
const play2 = `ytmp4`
const linkThisGroup = `chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
    
if (chat.antiLink && isAntiLink1 && !isAdmin) {
if (m.text.includes(play1)) return
if (m.text.includes(play2)) return
if (m.text.includes(linkThisGroup)) return !0
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
let responseb = await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return 
}

if (chat.antiLink && isAntiLink2 && !isAdmin) {
if (m.text.includes(linkThisGroup)) return !0
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
let responseb = await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return 
}

if (chat.antiLink && isAntiLink3 && !isAdmin) {
if (m.text.includes(linkThisGroup)) return !0
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
let responseb = await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return 
}

if (chat.antiLink && isAntiLink4 && !isAdmin) {
if (m.text.includes(linkThisGroup)) return !0
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
let responseb = await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return 
}

if (chat.antiLink && isAntiLink5 && !isAdmin) {
if (m.text.includes(linkThisGroup)) return !0
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
let responseb = await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return 
}

return !0
}