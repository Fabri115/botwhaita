import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@whiskeysockets/baileys';
import fs from 'fs';
import {performance} from 'perf_hooks';
const handler = async (m, {conn, usedPrefix}) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
  const groups = chats.filter(([id]) => id.endsWith('@g.us'));
  const used = process.memoryUsage();
  const {restrict} = global.db.data.settings[conn.user.jid] || {};
  const {autoread} = global.opts;
  const old = performance.now();
  const neww = performance.now();
  const speed = (neww - old).toFixed(5);
  const name = await
  conn.getName(m.sender);
  const prova = {
    'key': {
      'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo',
    }, 'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      }}, 'participant': '0@s.whatsapp.net',
  };
  const info = `
 ════ •⊰❂⊱• ════ 

𝐏𝐈𝐍𝐆 𝐁Ꮻ𝐓
𝐀𝐓𝐓𝐈𝐕𝐈𝐓𝐀': ${uptime}
𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢

 ════ •⊰❂⊱• ════
`.trim();
  conn.reply(m.chat, info, prova, m);
};
handler.help = ['infobot', 'speed'];
handler.tags = ['info', 'tools'];
handler.command = /^(pingg)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
