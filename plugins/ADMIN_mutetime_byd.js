import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, text,usedPrefix }) => {
  if (!text || !text.includes('@')) {
    m.reply('⚠️ 𝐅𝐨𝐫𝐦𝐚𝐭𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐨𝐧 𝐯𝐚𝐥𝐢𝐝𝐨! 𝐔𝐭𝐢𝐥𝐢𝐳𝐳𝐨 𝐜𝐨𝐫𝐫𝐞𝐭𝐭𝐨: mutetime <durata> @user *(durata in m/h)*');
    return;
  }

  let durationText = "⛔ 𝐃𝐮𝐫𝐚𝐭𝐚 𝐧𝐨𝐧 𝐯𝐚𝐥𝐢𝐝𝐚, 𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚 𝐮𝐧 𝐭𝐞𝐦𝐩𝐨 𝐭𝐫𝐚 *1𝐦* 𝐞 *24𝐡*";
  let duration = 0;
  let menzione = m.mentionedJid[0] || "";

  if (!menzione) {
    m.reply('𝐍𝐨𝐧 𝐡𝐚𝐢 𝐦𝐞𝐧𝐳𝐢𝐨𝐧𝐚𝐭𝐨 𝐥𝐚 𝐯𝐢𝐭𝐭𝐢𝐦𝐚 𝐝𝐚 𝐦𝐮𝐭𝐚𝐫𝐞');
    return;
  }

  let timeInput = text.split(' ')[0].toLowerCase();
  if (timeInput.endsWith('m')) {
    duration = parseInt(timeInput) * 60 * 1000; // Minuti
    let minuteText = parseInt(timeInput) === 1 ? '𝐦𝐢𝐧𝐮𝐭𝐨' : '𝐦𝐢𝐧𝐮𝐭𝐢';
    durationText = `🔇 *@${menzione.split`@`[0]}* 𝐬𝐭𝐚𝐫𝐚̀ 𝐳𝐢𝐭𝐭𝐨/𝐚 𝐩𝐞𝐫 *${parseInt(timeInput)}* ${minuteText}. 𝐌𝐞𝐧𝐨𝐦𝐚𝐥𝐞, 𝐚𝐯𝐞𝐯𝐚 𝐫𝐨𝐭𝐭𝐨 𝐢𝐥 𝐜𝐚𝐳𝐳𝐨 😮‍💨`;
  } else if (timeInput.endsWith('h')) {
    duration = parseInt(timeInput) * 60 * 60 * 1000; // Ore
    let hourText = parseInt(timeInput) === 1 ? '𝐨𝐫𝐚' : '𝐟𝐨𝐭𝐭𝐮𝐭𝐞 𝐨𝐫𝐞';
    durationText = `🔇 *@${menzione.split`@`[0]}* 𝐬𝐭𝐚𝐫𝐚̀ 𝐳𝐢𝐭𝐭𝐨/𝐚 𝐩𝐞𝐫 *${parseInt(timeInput)}* ${hourText}. 𝐀𝐯𝐞𝐯𝐚 𝐩𝐫𝐨𝐩𝐫𝐢𝐨 𝐬𝐜𝐚𝐬𝐬𝐚𝐭𝐨 𝐢 𝐜𝐨𝐠𝐥𝐢𝐨𝐧𝐢 𝐞𝐡 🙄`;
  }

  if (duration >= 60000 && duration <= 86400000) {
    let users = global.db.data.users;

    if (!users[menzione]) {
      users[menzione] = {};
    }

    users[menzione].muto = true;

    m.reply(durationText);

   setTimeout(() => {
      if (users[menzione] && users[menzione].muto) {
        users[menzione].muto = false;
        delete users[menzione].muteEndTime;
      m.reply(`🔊 𝐋𝐚 𝐩𝐮𝐧𝐢𝐳𝐢𝐨𝐧𝐞 𝐝𝐢 *@${menzione.split`@`[0]}* 𝐞̀ 𝐩𝐮𝐫𝐭𝐫𝐨𝐩𝐩𝐨 𝐟𝐢𝐧𝐢𝐭𝐚. 𝐀𝐝𝐞𝐬𝐬𝐨 𝐫𝐢𝐜𝐨𝐦𝐢𝐧𝐜𝐞𝐫𝐚̀ 𝐚 𝐫𝐨𝐦𝐩𝐞𝐫𝐞 𝐢𝐥 𝐜𝐚𝐳𝐳𝐨...`,) }
    }, duration);
  } else {
    m.reply(durationText);
  }
};

handler.command = /^mutetime$/i;
handler.admin = true;
export default handler;
