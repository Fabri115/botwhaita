let handler = async (m, {
    conn,
    text,
    command,
    isBotAdmin
}) => {
    if (!m.quoted) throw "Rispondi al messaggio che vuoi modificare"
    if (!text) throw "Nessun Testo"
    if (!m.quoted.isBaileys) throw "I messaggi non vengono inviati dai bot!"

    try {
        await conn.sendMessage(m.chat, {
            text: text,
            edit: m.quoted.vM.key
        })
    } catch (e) {
        try {
            let edit = m.quoted.sender ? m.message.extendedTextMessage.contextInfo.participant : m.key.participant
            let bang = m.quoted.id ? m.message.extendedTextMessage.contextInfo.stanzaId : m.key.id
            await conn.sendMessage(m.chat, {
                text: text,
                edit: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: bang,
                    participant: edit
                }
            })

        } catch (e) {
            try {
                await conn.relayMessage(m.chat, {
                    protocolMessage: {
                        key: m.quoted.vM.key,
                        type: 14,
                        editedMessage: {
                            conversation: text
                        }
                    }
                }, {})

            } catch (e) {
                await m.reply(eror)
            }
        }
    }
}
handler.help = ["edit teks ( Reply Pesan )"]
handler.tags = ["main"]
handler.command = ["edit"]

export default handler

function checkTrue(input) {
    return input === false;
}