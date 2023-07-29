const handler = async (m, {conn}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.quoted.sender ? m.quoted.sender : m.sender;
  const user = global.db.data.users[who];
  conn.reply(m.chat, `XP @${who.split(`@`)[0]} *${user.lastseen}*`, m, {mentions: [who]});
};
handler.help = ['xp <@user>'];
handler.tags = ['xp'];
handler.command = /^(e?xp)$/i;

export default handler;
