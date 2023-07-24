let handler = async (m, {
conn, args, participants
}) => {
let utenteX = global.db.data.users[m.sender]
let utenteZ = global.db.data.users[m.chat]
let gruppo = global.db.data.chats[m.chat]
m.reply(`
Messaggi tuoi in tutto il bot: ${utenteX.messaggi}
Solo qui: ${utenteZ.messaggi}
del gruppo: ${gruppo.gruppo}
`)
}
handler.command = /^(oio)$/i
export default handler