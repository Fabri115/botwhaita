import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@whiskeysockets/baileys';
import fs from 'fs';
import {performance} from 'perf_hooks';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, isPrems, groupMetadata}) => {
  const pp = imagen4;
  const img = './Menu2.jpg';
  const locale = 'it';
  const d = new Date(new Date + 3600000);
  const week = d.toLocaleDateString(locale, {weekday: 'long'});
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const totaluser = Object.values(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(850);
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
  const groups = chats.filter(([id]) => id.endsWith('@g.us'));
  const used = process.memoryUsage();
  const {restrict} = global.db.data.settings[conn.user.jid] || {};
  const {autoread} = global.opts;
  const grup = './no.png';
  const name = await
  conn.getName(m.sender);
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const prova ={'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': true, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};


  const text = `  *𝐃𝐀𝑽𝕀𝐃𝚵⇝𝐁Ꮻ𝐓|𝐌ΞИ𝐔*
┌──•✧𝐎𝐠𝐠𝐢✧•─────┐
┊─•✧*𝐃𝐚𝐭𝐚:* ${date}
┊─•✧*𝐎𝐫𝐚:* ${bottime}
└──── •✧✧• ────┘ 

┌──•✧𝐈𝐍𝐅𝐎 𝐔𝐓𝐄𝐍𝐓𝐄✧•─────┐
┊─•✧*𝐔𝐭𝐞𝐧𝐭𝐞: ${name} ✧* 
┊─•✧*𝐆𝐫𝐮𝐩𝐩𝐨:*
┊* _${groupMetadata.subject}_*
┊─•✧*𝐌𝐞𝐬𝐬𝐚𝐠𝐠𝐢: _${user.messaggi}_*
┊─•✧*𝐑𝐚𝐧𝐠𝐨: _${role}_*
└─── •✧✧• ────┘ 

┌─•✧𝐁𝐎𝐓 𝐈𝐍𝐅𝐎✧•──┐
┊─•✧*𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: *${gt}*
┊─•✧*𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐞 𝐁𝐨𝐭: *${vs}*
┊─•✧*𝐏𝐢𝐚𝐭𝐭𝐚𝐟𝐨𝐫𝐦𝐚: *
┊─•✧*𝐏𝐫𝐞𝐟𝐢𝐬𝐬𝐨: *${usedPrefix}*
┊─•✧*𝐀𝐭𝐭𝐢𝐯𝐢𝐭𝐚̀: *${uptime}*
┊─•✧*𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: *${rtotalreg} 𝐟𝐫𝐨𝐦 ${totaluser}
┊─•✧*𝐔𝐭𝐞𝐧𝐭𝐢 𝐓𝐨𝐭𝐚𝐥𝐢:* ${totaluser}
└─── •✧✧• ────┘

┌──*𝐂𝐎𝐌𝐀𝐍𝐃𝐈 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋𝐈*──┐
┊➤ ' ${usedPrefix} ' *𝐜𝐨𝐦𝐚𝐧𝐝𝐢*
┊➤ ' ${usedPrefix} ' *𝐦𝐞𝐧𝐮𝐠𝐫𝐮𝐩𝐩𝐨*
┊➤ ' ${usedPrefix} ' *𝐦𝐞𝐧𝐮𝐚𝐭𝐭𝐢𝐯𝐚*
┊➤ ' ${usedPrefix} ' *𝐦𝐞𝐧𝐮𝐚𝐮𝐝𝐢𝐨*
┊➤ ' ${usedPrefix} ' *𝐦𝐞𝐧𝐮𝐦𝐞𝐝𝐢𝐚*
┊➤ ' ${usedPrefix} ' *𝐦𝐞𝐧𝐮𝐨𝐰𝐧𝐞𝐫*
┊➤ ' ${usedPrefix} ' *𝐧𝐞𝐰𝐬*
└──𝐃𝐀𝑽𝕀𝐃𝚵 𝐁Ꮻ𝐓 V${vs}

┌─*𝐒𝐞𝐠𝐮𝐢𝐦𝐢 𝐬𝐮 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦*
┊─• instagram.com/davijdeee`.trim();
  conn.reply(m.chat, text, prova, m, doc, false);
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menudelfrocio)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
