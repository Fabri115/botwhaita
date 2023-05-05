import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/bot.mp3'
let chat = global.db.data.chats[m.chat]
//const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'bot', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
//const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}  
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendButton(m.chat, 'ciao', wm, [['Menu', `#menu`]], 'conversation', { sendEphemeral: true, quoted: m })
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: m })      
//conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: m })
}
return !0
}
export default handler
