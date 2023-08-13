/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw 'ok'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await }}
handler.command = /^ciao$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
