let handler = m => m

handler.before = async function (m, { participants, conn, isBotAdmin, isAdmin, args }) {
let users = participants.map(u => conn.decodeJid(u.id))
let frocio = users.lenght - 1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
if (isBotAdmin && !isAdmin)
   if (m.mentionedJid.length >= 20) conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

export default handler