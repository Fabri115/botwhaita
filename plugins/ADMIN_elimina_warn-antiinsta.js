
const handler = async (m, {conn, args, groupMetadata}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) return;
  if (!(who in global.db.data.users)) return;
  const warn = global.db.data.users[who].warnInstagram;
  if (warn > 0) {
    global.db.data.users[who].warnInstagram -= 1;
    m.reply(`👁️ eseguo`);
  } else if (warn == 0) {
    return;
  }
};
handler.help = ['delwarn @user'];
handler.tags = ['group'];
handler.command = ['delwarninsta', 'unwarninsta'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
