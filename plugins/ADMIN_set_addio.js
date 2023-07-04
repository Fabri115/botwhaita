let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('𝐨𝐤')
} else return
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setaddio'] 
handler.admin = true
export default handler
