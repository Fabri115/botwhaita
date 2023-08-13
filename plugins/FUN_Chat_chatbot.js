// ▪CÓDIGO BY ALBERTO9883 PRROS XD▪
// ▪NyanCatBot - MD▪

import MessageType from '@whiskeysockets/baileys';
import util from 'util';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const handler = (m) => m;

handler.before = async function(m, {conn, command, MessageType, text, usedPrefix}) {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[who];
  const fkowner = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if ((m.isBaileys && m.fromMe) || m.fromMe ) return true;
  if (chat.chatbot) {
    // ━━━━━━━━◜🌾Textos🌾◞━━━━━━━━
    const texto1A = /fra/i;
    const texto1B = texto1A.exec(m.text);

    const texto2A = /fabri/i;
    const texto2B = texto2A.exec(m.text);

    const texto3A = /achi/i;
    const texto3B = texto3A.exec(m.text);

    const texto4A = /dani/i;
    const texto4B = texto4A.exec(m.text);

    const texto5A = /ping/i;
    const texto5B = texto5A.exec(m.text);

    const texto6A = /moon/i;
    const texto6B = texto6A.exec(m.text);
    // ━━━━━━━━━━━━━━━━━━━━━━━


    // ━━━━━━━◜🍁Respuestas🍁◞━━━━━━━
    if (texto1B) {
      await conn.sendPresenceUpdate('composing', m.chat);
      conn.reply(m.chat, `Ciao figlio di puttana come stai? @${who.split('@s.whatsapp.net')[0]}`, fkowner, {mentions: [who]});
    }

    if (texto2B) {
      await conn.sendPresenceUpdate('composing', m.chat);
      conn.reply(m.chat, `Che cazzo vuoi dal mio padrone? @${who.split('@s.whatsapp.net')[0]}`, fkowner, {mentions: [who]});
    }

    if (texto3B) {
      await conn.sendPresenceUpdate('composing', m.chat);
      conn.reply(m.chat, `mi piace quando mi dici di stare zitta`, m);
    }

    if (texto4B) {
      await conn.sendPresenceUpdate('composing', m.chat);
      conn.reply(m.chat, `Cazzo ma hai visto quanto è potente?`, m);
    }

    if (texto5B) {
      await conn.sendPresenceUpdate('composing', m.chat);
      conn.reply(m.chat, `Aaaah ma stai parlando al bot, inchinati!`, m);
    }

    if (texto6B) {
      await conn.sendPresenceUpdate('composing', m.chat);
      conn.reply(m.chat, `ESISTE SOLO UN GRUPPO!`, m);
    }
    // ━━━━━━━━━━━━━━━━━━━━━━━
  }
  return !0;
};

export default handler;
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
