const isLink1 = /([A-Za-z]{1,50}).com\/([0-9A-Za-z]{2,250})/i;
const isLink2 = /([A-Za-z]{1,50}).it\/([0-9A-Za-z]{2,250})/i;
const isLink3 = /([A-Za-z]{1,50}).be\/([0-9A-Za-z]{2,250})/i;
const isLink4 = /([A-Za-z]{1,50}).me\/([0-9A-Za-z]{2,250})/i;
const isLink5 = /([A-Za-z]{1,50}).net\/([0-9A-Za-z]{2,250})/i;
const isLink6 = /http/i;
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
  const isAntiLink1 = isLink1.exec(m.text);
  const isAntiLink2 = isLink2.exec(m.text);
  const isAntiLink3 = isLink3.exec(m.text);
  const isAntiLink4 = isLink4.exec(m.text);
  const isAntiLink5 = isLink5.exec(m.text);
  const isAntiLink6 = isLink6.exec(m.text);
  const play1 = `ytmp3`;
  const play2 = `ytmp4`;
  const linkThisGroup = `chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
  if (chat.antilinkbase2 && isAntiLink1 && !isAdmin && isBotAdmin) {
    if (isBotAdmin) {
      if (m.text.includes(play1)) return;
      if (m.text.includes(play2)) return;
      if (m.text.includes(linkThisGroup)) return !0;
      global.db.data.users[m.sender].warn += 1;
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const warn = global.db.data.users[m.sender].warn;
      const user = global.db.data.users[m.sender];
      if (warn < war) {
        m.reply(`⚠️ 𝐍𝐎𝐍 𝐄̀ 𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐎 𝐈𝐍𝐕𝐈𝐀𝐑𝐄 𝐋𝐈𝐍𝐊`);
      } else if ((warn) => war) {
        global.db.data.users[m.sender].warn = 0;
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
  if (chat.antilinkbase2 && isAntiLink2 && !isAdmin && isBotAdmin) {
    if (isBotAdmin) {
      if (m.text.includes(linkThisGroup)) return !0;
      global.db.data.users[m.sender].warn += 1;
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const warn = global.db.data.users[m.sender].warn;
      const user = global.db.data.users[m.sender];
      if (warn < war) {
        m.reply(`⚠️ 𝐍𝐎𝐍 𝐄̀ 𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐎 𝐈𝐍𝐕𝐈𝐀𝐑𝐄 𝐋𝐈𝐍𝐊`);
      } else if ((warn) => war) {
        global.db.data.users[m.sender].warn = 0;
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
  if (chat.antilinkbase2 && isAntiLink3 && !isAdmin && isBotAdmin) {
    if (isBotAdmin) {
      if (m.text.includes(linkThisGroup)) return !0;
      global.db.data.users[m.sender].warn += 1;
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const warn = global.db.data.users[m.sender].warn;
      const user = global.db.data.users[m.sender];
      if (warn < war) {
        m.reply(`⚠️ 𝐍𝐎𝐍 𝐄̀ 𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐎 𝐈𝐍𝐕𝐈𝐀𝐑𝐄 𝐋𝐈𝐍𝐊`);
      } else if ((warn) => war) {
        global.db.data.users[m.sender].warn = 0;
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
  if (chat.antilinkbase2 && isAntiLink4 && !isAdmin && isBotAdmin) {
    if (isBotAdmin) {
      if (m.text.includes(linkThisGroup)) return !0;
      global.db.data.users[m.sender].warn += 1;
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const warn = global.db.data.users[m.sender].warn;
      const user = global.db.data.users[m.sender];
      if (warn < war) {
        m.reply(`⚠️ 𝐍𝐎𝐍 𝐄̀ 𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐎 𝐈𝐍𝐕𝐈𝐀𝐑𝐄 𝐋𝐈𝐍𝐊`);
      } else if ((warn) => war) {
        global.db.data.users[m.sender].warn = 0;
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
  if (chat.antilinkbase2 && isAntiLink5 && !isAdmin && isBotAdmin) {
    if (isBotAdmin) {
      if (m.text.includes(linkThisGroup)) return !0;
      global.db.data.users[m.sender].warn += 1;
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const warn = global.db.data.users[m.sender].warn;
      const user = global.db.data.users[m.sender];
      if (warn < war) {
        m.reply(`⚠️ 𝐍𝐎𝐍 𝐄̀ 𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐎 𝐈𝐍𝐕𝐈𝐀𝐑𝐄 𝐋𝐈𝐍𝐊`);
      } else if ((warn) => war) {
        global.db.data.users[m.sender].warn = 0;
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
  if (chat.antilinkbase2 && isAntiLink6 && !isAdmin && isBotAdmin) {
    if (isBotAdmin) {
      if (m.text.includes(play1)) return;
      if (m.text.includes(play2)) return;
      if (m.text.includes(linkThisGroup)) return !0;
      global.db.data.users[m.sender].warn += 1;
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const warn = global.db.data.users[m.sender].warn;
      const user = global.db.data.users[m.sender];
      if (warn < war) {
        m.reply(`⚠️ 𝐍𝐎𝐍 𝐄̀ 𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐎 𝐈𝐍𝐕𝐈𝐀𝐑𝐄 𝐋𝐈𝐍𝐊`);
      } else if ((warn) => war) {
        global.db.data.users[m.sender].warn = 0;
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
  return !0;
}
