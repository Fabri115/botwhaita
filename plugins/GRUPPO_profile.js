import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn}) => {
  const _pp = './src/avatar_contact.png';
  const user = db.data.users[m.sender];
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const pp = await conn.profilePictureUrl(who, 'image').catch((_) => './src/avatar_contact.png');
  const {premium, level, limit, exp, lastclaim, registered, regTime, age} = global.db.data.users[m.sender];
  const username = conn.getName(who);
  const name = conn.getName(who);
  const fkon = {key: {fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? {remoteJid: '16504228206@s.whatsapp.net'} : {})}, message: {contactMessage: {displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}};
  const str = `
]──────────❏ *PROFILE* ❏──────────[
💌 • *Name:* ${username} 
🎐 • *Username:* ${registered ? name : ''}
📧 • *Tag:* @${who.replace(/@.+/, '')}
📞 • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 • *Link:* https://wa.me/${who.split`@`[0]}
🎨 • *Age:* ${user.messagi}
`.trim();
  conn.sendButton(m.chat, str, pp, [[`${registered ? 'Menu':'Verify'}`, `${user.registered ? '.menu':'.verify'}`]], fkon, {contextInfo: {mentionedJid: [who], forwardingScore: 999, isForwarded: true}});
};
handler.help = ['profile [@user]'];
handler.tags = ['exp'];
handler.command = /^profy$/i;
export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map((v) => v.toString().padStart(2, 0)).join('');
}
