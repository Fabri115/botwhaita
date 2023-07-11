let handler = async (m, {
conn, command, text, isAdmin
}) => {
if (command == 'muta') {
if (!isAdmin)
throw '𝐒𝐨𝐥𝐨 𝐮𝐧 𝐚𝐝𝐦𝐢𝐧 𝐩𝐮𝐨 𝐞𝐬𝐞𝐠𝐮𝐢𝐫𝐞 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 👑'
let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
let utente = global.db.data.users[menzione]
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": {
"extendedTextMessage": { text: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐮𝐭𝐞𝐧𝐭𝐞 𝐞 𝐬𝐭𝐚𝐭𝐨 𝐦𝐮𝐭𝐚𝐭𝐨/𝐚 🔇 ',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
if (!utente)
throw m.reply('𝐌𝐞𝐧𝐳𝐢𝐨𝐧𝐚 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐜𝐡𝐞 𝐝𝐞𝐬𝐢𝐝𝐞𝐫𝐢 𝐦𝐮𝐭𝐚𝐫𝐞 👤')
if (utente.muto == true)
throw '𝐐𝐮𝐞𝐬𝐭𝐨 𝐮𝐭𝐞𝐧𝐭𝐞 𝐞` 𝐠𝐢𝐚 𝐬𝐭𝐚𝐭𝐨 𝐦𝐮𝐭𝐚𝐭𝐨/𝐚 🔇'
conn.reply(m.chat, `𝐈 𝐬𝐮𝐨𝐢 𝐦𝐞𝐬𝐬𝐚𝐠𝐠𝐢 𝐯𝐞𝐫𝐫𝐚𝐧𝐧𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐭𝐢 `, prova, null, {
mentions: [
menzione
]
})
global.db.data.users[menzione].muto = true
}
if (command == 'smuta') {
if (!isAdmin)
throw '𝐒𝐨𝐥𝐨 𝐮𝐧 𝐚𝐝𝐦𝐢𝐧 𝐩𝐮𝐨 𝐞𝐬𝐞𝐠𝐮𝐢𝐫𝐞 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 👑'
let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
let utente = global.db.data.users[menzione]
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": {
"extendedTextMessage": { text: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐮𝐭𝐞𝐧𝐭𝐞 𝐞 𝐬𝐭𝐚𝐭𝐨 𝐬𝐦𝐮𝐭𝐚𝐭𝐨/𝐚 🔊',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
if (!utente)
throw m.reply('𝐌𝐞𝐧𝐳𝐢𝐨𝐧𝐚 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐜𝐡𝐞 𝐝𝐞𝐬𝐢𝐝𝐞𝐫𝐢 𝐬𝐦𝐮𝐭𝐚𝐫𝐞 👤')
global.db.data.users[menzione].muto = false
conn.reply(m.chat, `𝐈 𝐬𝐮𝐨𝐢 𝐦𝐞𝐬𝐬𝐚𝐠𝐠𝐢 𝐧𝐨𝐧 𝐯𝐞𝐫𝐫𝐚𝐧𝐧𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐭𝐢`, prova, null, {
mentions: [
menzione
]
})
}
}
handler.command = /^(muta|smuta)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
