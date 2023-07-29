// ▪CÓDIGO BY ALBERTO9883 PRROS XD▪
// ▪NyanCatBot - MD▪

import MessageType from '@adiwajshing/baileys';
import util from 'util';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const handler = (m) => m;

handler.before = async function(m, {conn, command, MessageType, text, usedPrefix}) {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[who];

  if ((m.isBaileys && m.fromMe) || m.fromMe ) return true;

  if (chat.chatbot) {
    // ━━━━━━━━◜🌾Textos🌾◞━━━━━━━━
    const audio1A = /donn|Mujer|wom|Wom/i;
    const audio1B = audio1A.exec(m.text);

    const audio5A = /kit|kitsune/i;
    const audio5B = audio5A.exec(m.text);

    const audio2A = /10secondi/i;
    const audio2B = audio2A.exec(m.text);

    const audio3A = /achi zitta/i;
    const audio3B = audio3A.exec(m.text);

    const audio4A = /gianpaolo/i;
    const audio4B = audio4A.exec(m.text);

    const audio6A = /porco/i;
    const audio6B = audio6A.exec(m.text);

    const audio7A = /germanomosconi/i;
    const audio7B = audio7A.exec(m.text);

    const audio8A = /happyhippo/i;
    const audio8B = audio8A.exec(m.text);

    const audio9A = /achi buongiorno/i;
    const audio9B = audio9A.exec(m.text);

    const audio10A = /gacha/i;
    const audio10B = audio10A.exec(m.text);
    // ━━━━━━━━━━━━━━━━━━━━━━━


    // ━━━━━━━◜🍁Respuestas🍁◞━━━━━━━
    if (audio1B) {
      const vn = './storage/mp3/women.mp3';
      await conn.sendPresenceUpdate('recording', m.chat);
      conn.sendMessage(m.chat, {audio: {url: vn}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
    } else

      if (audio5B) {
        const vn = './storage/mp3/kitsune.mp3';
        await conn.sendPresenceUpdate('recording', m.chat);
        conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
      } else

        if (audio6B) {
          const vn = './storage/mp3/Germano Mosconi - Porco dio.mp3';
          await conn.sendPresenceUpdate('recording', m.chat);
          conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
        } else

          if (audio7B) {
            const vn = './storage/mp3/Mosconi - Ma che oooh (COMPLETO).mp3';
            await conn.sendPresenceUpdate('recording', m.chat);
            conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
          } else

            if (audio8B) {
              const vn = './storage/mp3/HAPPY HIPPO FREESTYLE.mp3';
              await conn.sendPresenceUpdate('recording', m.chat);
              conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
            } else

              if (audio9B) {
                const vn = './storage/mp3/achi-buongiorno.mp3';
                await conn.sendPresenceUpdate('recording', m.chat);
                conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
              } else

                if (audio10B) {
                  const vn = './storage/mp3/Diss Gacha - BALLAS RMX ft MamboLosco, Janga ODT - prod. Sala.mp3';
                  await conn.sendPresenceUpdate('recording', m.chat);
                  conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
                } else

                  if (audio2B) {
                    const vn = './storage/mp3/Conto alla Rovescia 10 secondi Italiano Countdown 10 seconds ITA.mp3';
                    await conn.sendPresenceUpdate('recording', m.chat);
                    conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
                  } else

                    if (audio3B) {
                      const vn = './storage/mp3/achizitta2.mp3';
                      await conn.sendPresenceUpdate('recording', m.chat);
                      conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
                    } else

                      if (audio4B) {
                        const vn = './storage/mp3/Orgasmi.mp3';
                        await conn.sendPresenceUpdate('recording', m.chat);
                        conn.sendMessage(m.chat, {audio: {url: vn}, contextInfo: {'externalAdReply': {'body': `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, 'previewType': 'PHOTO', 'thumbnailUrl': null, 'sourceUrl': `pornuhub`, 'showAdAttribution': true}}, seconds: '6', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3`}, {quoted: m});
                      }
    // ━━━━━━━━━━━━━━━━━━━━━━━
  }
  return !0;
};

export default handler;
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
