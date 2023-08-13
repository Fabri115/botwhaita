import fs from 'fs';
import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix: _p}) => {
  const list = `
┏━━━━━━━━━━━━━━━━━━━━┅
┇  *「 Plugin disattivato con successo 」*
┗━━━━━━━━━━━━━━━━━━━━┅
`.trim();// davide gay
  await conn.reply(m.chat, list, 0, {
    contextInfo: {mentionedJid: [m.sender],
      externalAdReply: {
        mediaUrl: '',
        mediaType: 4,
        title: global.wm,
        body: 'Suggerisco questa sorella',
        thumbnail: imagen4,
      }},
  });
};
handler.command = /^pluginoff$/i;

handler.owner = true;

export default handler;
