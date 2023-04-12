let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('𝐨𝐤')
} else return
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setbenvenuto'] 
handler.admin = true
export default handler
