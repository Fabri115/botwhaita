let handler = async (m, { conn, args, chat,chats,user }) => {
	let id = args && /\d+\-\d+g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [Object.keys(id).online, conn.user.jid, conn.user.online]
                    conn.reply(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + id).join`\n`, m, { mentions: online })

}
handler.help = ['here','listonline']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler