let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
wa.me/393312171655
`.trim()   
let buttonMessage= {
'document': { url: `stocazzo.com` },
'mimetype': `application/${document}`,
'fileName': `ok`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'stocazzo.com',
'mediaType': 2,
'previewType': 'pdf',
'title': 'bot⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'stocazzo.com' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
