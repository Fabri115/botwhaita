const handler = async (m) => {
    const mention = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : m.text)
    const user = global.db.data.users[mention]
    
    if (!user) return conn.reply(m.chat, 'Inserisci la menzione nel comando!')
    
    const args = m.text.match(/\d+/)
    const numMessages = args ? parseInt(args[0]) : 0
    
    if (numMessages <= 0) {
        return conn.reply(m.chat, 'Inserisci un numero valido di messaggi da aggiungere!', m)
    }
    
    user.messaggi = (user.messaggi || 0) + numMessages
    conn.reply(m.chat, `Ho aggiunto ${numMessages} messaggi a @${mention.split('@')[0]}`, null, { mentions: [mention] })
}

handler.command = /^(aggiungi)$/i
handler.rowner = true
export default handler