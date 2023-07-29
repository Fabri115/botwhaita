const handler = async (m, {conn, args}) => {
  const group = m.chat;
  const link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
  conn.reply(m.chat, link, m, {detectLink: true});
// conn.sendMessage(m.chat, { text: link }, { quoted: m, detectLink: true })
};
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
handler.admin = true;
export default handler;
