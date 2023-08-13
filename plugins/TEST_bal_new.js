import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import {canLevelUp, xpRange} from '../lib/levelling.js';
import fs from 'fs';
import {group} from 'console';

const db = JSON.parse(fs.readFileSync('./database.json'));

const handler = async (m, {conn, usedPrefix, command, groupMetadata}) => {
  // ... il resto del codice

  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in db.users)) throw `*L'utente deve ancora scrivere un msg*`;
  const pp = await conn.profilePictureUrl(who, 'image').catch((_) => './src/avatar_contact.png');
  const user = db.users[who];
  const {name, exp, lastclaim, messaggi, registered, regTime, age, level, role, warn} = db.users[who];
  const {min, xp, max} = xpRange(user.level, global.multiplier);
  const username = conn.getName(who);
  const math = max - xp;
  const prem = global.prems.includes(who.split`@`[0]);
  const sn = createHash('md5').update(who).digest('hex');
  for (const [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats))

  // Salva i dati aggiornati nel file JSON
  {
    fs.writeFileSync('./database.json', JSON.stringify(db, null, 2));
  }

  const text = `
┏━━✯✯✯✯✯✯✯✯✯━━┓
                   Attività
 ⋄ Nome : @${user.name}
 ⋄ Messaggi : ${global.db.data.users[m.chat].messaggiId}
 ⋄ GRUPPO : ${groupMetadata.subject}
 • NOTA :
 I msg vengono calcolati da quando il bot è attivo
                ᵉᵈᶦᶻ ᴹᵒᵒⁿᶜˡᵒᵘᵈˢ

┗━━✯✯✯✯✯✯✯✯✯━━┛
`;
  conn.reply(m.chat, text, m, {mentions: [m.sender]});
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = /^zc$/i;
export default handler;
