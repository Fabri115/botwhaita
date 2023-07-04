let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `chi? tagga qualcuno`
if (!m.mentionedJid[0] && !m.quoted) return 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
let duration = 0

// Verifica se la durata è specificata nel comando
  const durationMatch = command.match(/\d+/)
  if (durationMatch) {
    duration = parseInt(durationMatch[0])
  } else {
    m.reply('Specifica una durata valida. Ad esempio: muta @utente per 5 min')
    return
  }
 // Converte la durata da minuti a millisecondi
  const durationMs = duration * 60000


users[who].muto = true
m.reply('*Mutato* 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓ *tutti i messaggi inviati ti verranno eliminati. soffri.*Durata: ${duration} min')    // Imposta il timer in base alla durata specificata
  setTimeout(() => {
    users[who].muto = false
    conn.reply(m.chat, 'Hai ripreso a parlare dopo la scadenza del timer.', m)
  }, durationMs)
}


handler.command = /^muta$/i
handler.admin = true
export default handler
