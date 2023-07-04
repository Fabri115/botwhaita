let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw '*ORA SEI AMMINISTRATORE 😀*'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^qwerty$/i
handler.g1 = true
handler.botAdmin = true
export default handler