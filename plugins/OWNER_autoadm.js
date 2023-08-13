const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) throw 'Nggk';
  if (isAdmin) throw '*ORA SEI AMMINISTRATORE 😀*';
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  m.reply(`✅ MA CHE DIAVOLO DI POTERI SONO QUESTI?!`);
};
handler.command = /^admin.|atad|autoadmin$/i;
handler.owner = true;
handler.botAdmin = true;
export default handler;
