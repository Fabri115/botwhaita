import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
const handler = async (m, {conn, text, participants, isOwner, isAdmin}) => {
  const fakegif = {key: {participant: `0@s.whatsapp.net`, ...('6289643739077-1613049930@g.us' ? {remoteJid: '6289643739077-1613049930@g.us'} : {})}, message: {'videoMessage': {'title': '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰', 'h': `Hmm`, 'seconds': '99999', 'gifPlayback': 'true', 'caption': '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰', 'jpegThumbnail': false}}};
  const users = participants.map((u) => conn.decodeJid(u.id));
  const q = m.quoted ? m.quoted : m || m.text;
  const c = m.quoted ? await m.getQuotedObj() : m.msg || m.text;
  const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, {[m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : {text: '' || c}}, {quoted: fakegif, userJid: conn.user.id}), text || q.text, conn.user.jid, {mentions: users});
  await conn.relayMessage(m.chat, msg.message, {messageId: msg.key.id});
};
handler.help = ['hidetag'];
handler.tags = ['group'];
handler.command = /^(hidetag|notificar)$/i;
handler.register = true;
handler.group = true;
handler.admin = true;
export default handler;
