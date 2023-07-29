import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@adiwajshing/baileys';
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


┌──⭓ 𝐆𝐑𝐔𝐏𝐏𝐎
│✏︎ ${usedPrefix} 𝒌𝒊𝒄𝒌 / 𝒂𝒅𝒅𝒊𝒐 / 𝒃𝒂𝒏 @
│✏︎ ${usedPrefix} 𝒘𝒂𝒓𝒏 @
│✏︎ ${usedPrefix} 𝒖𝒏𝒘𝒂𝒓𝒏 @
│✏︎ ${usedPrefix} 𝒅𝒆𝒍 (𝒎𝒔𝒈)
│✏︎ ${usedPrefix} 𝒔𝒕𝒆𝒓𝒎𝒊𝒏𝒂 +𝟗𝟐
│✏︎ ${usedPrefix} 𝒍𝒊𝒔𝒕𝒂𝒏𝒖𝒎 +𝟏
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒃𝒆𝒏𝒗𝒆𝒏𝒖𝒕𝒐
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌𝒉𝒕𝒕𝒑𝒔
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒔𝒑𝒂𝒎
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒅𝒆𝒕𝒆𝒄𝒕
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒆𝒍𝒊𝒎𝒊𝒏𝒂
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒗𝒊𝒆𝒘𝒐𝒏𝒄𝒆
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒕𝒓𝒂𝒗𝒂
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒑𝒂𝒌𝒊
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒎𝒐𝒅𝒐𝒂𝒅𝒎𝒊𝒏
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒖𝒕𝒐𝒔𝒕𝒊𝒄𝒌𝒆𝒓
│✏︎ ${usedPrefix} 𝒍𝒊𝒏𝒌
│✏︎ ${usedPrefix} 𝒓𝒆𝒊𝒎𝒑𝒐𝒔𝒕𝒂
│✏︎ ${usedPrefix} 𝒉𝒊𝒅𝒆𝒕𝒂𝒈 (𝒕𝒙𝒕)
│✏︎ ${usedPrefix} 𝒕𝒂𝒈𝒂𝒍𝒍 / 𝒎𝒂𝒓𝒄𝒂𝒓 (𝒕𝒙𝒕)
│✏︎ ${usedPrefix} 𝒊𝒏𝒂𝒕𝒕𝒊𝒗𝒊
│✏︎ ${usedPrefix} 𝒑𝒓𝒐𝒎𝒖𝒐𝒗𝒊 / 𝒎𝒆𝒕𝒕𝒊𝒂𝒅𝒎𝒊𝒏 @
│✏︎ ${usedPrefix} 𝒓𝒆𝒕𝒓𝒐𝒄𝒆𝒅𝒊 / 𝒕𝒐𝒈𝒍𝒊𝒂𝒅𝒎𝒊𝒏 @
│✏︎ ${usedPrefix} 𝒈𝒓𝒖𝒑𝒑𝒐 𝒂𝒑𝒆𝒓𝒕𝒐 / 𝒄𝒉𝒊𝒖𝒔𝒐
│✏︎ ${usedPrefix} 𝒏𝒐𝒎𝒆 (𝒕𝒙𝒕)
│✏︎ ${usedPrefix} 𝒔𝒆𝒕𝒃𝒆𝒏𝒗𝒆𝒏𝒖𝒕𝒐 (@𝒖𝒔𝒆𝒓 𝒕𝒙𝒕)
│✏︎ ${usedPrefix} 𝒔𝒆𝒕𝒂𝒅𝒅𝒊𝒐 (@𝒖𝒔𝒆𝒓 𝒕𝒙𝒕)
│✏︎ ${usedPrefix} 𝒂𝒅𝒎𝒊𝒏
│✏︎ ${usedPrefix} 𝒑𝒊𝒏𝒈
│✏︎ ${usedPrefix} 𝒂𝒍𝒍𝒎𝒆𝒏𝒖
│✏︎ 𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
└────*𝑩𝑶𝑻𝑾𝑯𝑨𝑰𝑻𝑨 V${vs}*
`.trim();
  conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false );
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menugruppo)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
