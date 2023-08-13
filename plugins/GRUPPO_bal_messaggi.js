import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import {canLevelUp, xpRange} from '../lib/levelling.js';
// import db from '../lib/database.js'

const handler = async (m, {conn, usedPrefix, command}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `*L'utente deve ancora scrivere un msg*`;
  const pp = await conn.profilePictureUrl(who, 'image').catch((_) => './src/avatar_contact.png');
  const user = global.db.data.users[who];
  const {name, exp, messaggi, lastclaim, registered, regTime, age, level, role, warn} = global.db.data.users[who];
  const {min, xp, max} = xpRange(user.level, global.multiplier);
  const username = conn.getName(who);
  const math = max - xp;
  const prem = global.prems.includes(who.split`@`[0]);
  const sn = createHash('md5').update(who).digest('hex');
  const text = `
┏━━✯✯✯✯✯✯✯✯✯━━┓
                   *_Attività_* 
 ⋄ *Nome* : @${user.name} 
 ⋄ *Messaggi* : *${global.db.data.users[who].messaggi}*

 • *NOTA :* 
 *_I msg vengono calcolati da quando il bot è attivo_*
                ᵉᵈᶦᶻ ᴹᵒᵒⁿᶜˡᵒᵘᵈˢ

┗━━✯✯✯✯✯✯✯✯✯━━┛
`;
  conn.reply(m.chat, text, m, {mentions: [m.sender]});
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = /^bal$/i;
export default handler;
