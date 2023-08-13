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
  const grup = './Menu2.jpg';
  const old = performance.now();
  const neww = performance.now();
  const speed = (neww - old).toFixed(5);
  const text = `


┌──*𝑴𝑬𝑵𝑼 𝑨𝑼𝑫𝑰𝑶*─┐
│✏︎ .𝒃𝒂𝒔𝒔
│✏︎ .𝒃𝒍𝒐𝒘𝒏
│✏︎ .𝒅𝒆𝒆𝒑
│✏︎ .𝒆𝒂𝒓𝒓𝒂𝒑𝒆
│✏︎ .𝒇𝒂𝒔𝒕
│✏︎ .𝒇𝒂𝒕
│✏︎ .𝒏𝒊𝒈𝒉𝒕𝒄𝒐𝒓𝒆
│✏︎ .𝒓𝒆𝒗𝒆𝒓𝒔𝒆
│✏︎ .𝒓𝒐𝒃𝒐𝒕
│✏︎ .𝒔𝒍𝒐𝒘
│✏︎ .𝒔𝒎𝒐𝒐𝒕𝒉
│✏︎ .𝒕𝒖𝒑𝒂𝒊
│✏︎  𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
└────*𝑩𝑶𝑻𝑾𝑯𝑨𝑰𝑻𝑨 V${vs}*
`.trim();
  conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false );
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuaudio)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
