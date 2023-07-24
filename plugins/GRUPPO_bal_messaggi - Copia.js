import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import { canLevelUp, xpRange } from '../lib/levelling.js';
//import db from '../lib/database.js';

let handler = async (m, { conn, usedPrefix, command }) => {
  let mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  if (!(mentionedUser in global.db.data.users)) throw `*L'utente deve ancora scrivere un msg*`;

  let pp = await conn.profilePictureUrl(mentionedUser, 'image').catch(_ => './src/avatar_contact.png');
  let user = global.db.data.users[mentionedUser];
  let { name, exp, messaggi, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[mentionedUser];
  let { min, xp, max } = xpRange(user.level, global.multiplier);
  let username = conn.getName(mentionedUser);
  let math = max - xp;
  let prem = global.prems.includes(mentionedUser.split`@`[0]);
  let sn = createHash('md5').update(mentionedUser).digest('hex');

  // Get messages of the group where the command is executed
  let groupMessages = await conn.loadMessage(m.chat, 1000); // Load last 1000 messages in the group
  let userMessagesCount = groupMessages.filter(msg => msg.key.fromMe === false && msg.key.participant === mentionedUser).length;

  let text = `
┏━━✯✯✯✯✯✯✯✯✯━━┓
                   Attività
 ⋄ Nome : @${user.name}
 ⋄ Messaggi inviati nel gruppo : ${userMessagesCount}

 • NOTA :
 I msg vengono calcolati da quando il bot è attivo
                ᵉᵈᶦᶻ ᴹᵒᵒⁿᶜˡᵒᵘᵈˢ

┗━━✯✯✯✯✯✯✯✯✯━━┛
`;
  conn.reply(m.chat, text, m, { mentions: [m.sender] });
};

handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = /^rt$/i;
export default handler;