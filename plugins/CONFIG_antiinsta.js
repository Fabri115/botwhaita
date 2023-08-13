const linkRegex = /instagram.com/i;
export async function before(m, {isAdmin, groupMetadata, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const war = '3';
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `instagram.com`;
  if (isAdmin && chat.antiinsta && m.text.includes(grupo)) return;
  if (chat.antiinsta && isGroupLink && !isAdmin && isBotAdmin) {
    if (isBotAdmin) {
      global.db.data.users[m.sender].warnInstagram += 1;
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const warnInstagram = global.db.data.users[m.sender].warnInstagram;
      const user = global.db.data.users[m.sender];
      if (warnInstagram < war) {
        conn.reply(m.chat, `⚠ 𝐑𝐈𝐋𝐄𝐕𝐀𝐓𝐎 𝐋𝐈𝐍𝐊 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌, 𝐐𝐔𝐀𝐋𝐂𝐔𝐍𝐎 𝐕𝐔𝐎𝐋𝐄 𝐃𝐈𝐕𝐄𝐍𝐓𝐀𝐑𝐄 𝐔𝐍𝐀 𝐒𝐓𝐀𝐑 
*${user.warnInstagram}* ° 𝐀𝐕𝐕𝐄𝐑𝐓𝐈𝐌𝐄𝐍𝐓𝐎, 𝐍𝐎𝐍 𝐑𝐈𝐏𝐑𝐎𝐕𝐀𝐑𝐂𝐈 𝐍𝐄𝐒𝐒𝐔𝐍𝐎 𝐓𝐈 𝐂𝐀𝐆𝐇𝐄𝐑𝐀 𝐁𝐄𝐘𝐎𝐍𝐂𝐄  `);
      } else if ((warnInstagram) => war) {
        global.db.data.users[m.sender].warnInstagram = 0;
        m.reply(`⛔ 𝐔𝐓𝐄𝐍𝐓𝐄 𝐑𝐈𝐌𝐎𝐒𝐒𝐎, 𝐀𝐍𝐃𝐑𝐀 𝐀 𝐔𝐎𝐌𝐈𝐍𝐈 𝐄 𝐃𝐎𝐍𝐍𝐄`);
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
  return !0;
}
