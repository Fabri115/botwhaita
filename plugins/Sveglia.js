let handler = async (m, {
conn, groupMetadata
}) => {
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === true)
throw 'Che minchia vuoi? sono già sveglio'
global.db.data.chats[m.chat].spacobot = true
m.reply(`Porco Diooo! Proprio mo che sognavo di scoparmi tua madre`)
}
handler.customPrefix = /sveglia fabri/i
handler.command = new RegExp
handler.admin = true
export default handler