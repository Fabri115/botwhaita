let handler = async (m, { conn, command, text }) => {
let love = `𝐂𝐀𝐋𝐂𝐎𝐋𝐀𝐓𝐎𝐑𝐄 𝐃𝐈 𝐀𝐌𝐎𝐑𝐄 ❤️
Affinità tra ${text} e te: ${Math.floor(Math.random() * 100)}%
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love|amore)$/i
export default handler
