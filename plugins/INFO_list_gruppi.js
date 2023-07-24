let handler = async (m, { conn, messaggi }) => {
messaggi
    let txt = ''
    for (let [jid, chat, messaggi] of Object.entries(conn.chats).filter(([jid, chat, messaggi]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n[${chat?.metadata?.read_only ? 'Left' : 'Joined'}${messaggi}]\n\n`
    m.reply(`List Groups:
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i

export default handler