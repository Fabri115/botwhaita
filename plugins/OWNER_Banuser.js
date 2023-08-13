const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `chi? tagga qualcuno`;
  if (!m.mentionedJid[0] && !m.quoted) return;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐨 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;
