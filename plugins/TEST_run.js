

import fs from 'fs';
import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix: _p}) => {
  const info = `*bot attivo*\n@${m.sender.split('@')[0]}`;
  await conn.reply(m.chat, info, m, {contextInfo: {mentionedJid: [m.sender], forwardingScore: 1,
    externalAdReply: {title: author, body: bottime, thumbnail: fs.readFileSync('./no.png')}}});
};

handler.customPrefix = /^(tes|tess|test)$/i;
handler.command = new RegExp;

export default handler;
