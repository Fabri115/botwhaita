const isJoin = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;
import fs from 'fs';

export async function before(m, {conn, args, usedPrefix, command, isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const isAutoJoin = isJoin.exec(m.text);

  if (chat.autoJoin && isAutoJoin) {
    await conn.sendButton(m.chat, `*Bot auto Join Detect!*`, wm, null, [
      ['MATIKAN AUTO JOIN', `${usedPrefix}off autojoin`],
      ['BOT JOIN', `${usedPrefix} ${isJoin}`],
    ], m);
  }
  return !0;
}


