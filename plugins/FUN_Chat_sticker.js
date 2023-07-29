// ▪CÓDIGO BY ALBERTO9883 PRROS XD▪
// ▪NyanCatBot - MD▪

import MessageType from '@adiwajshing/baileys';
import util from 'util';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const handler = (m) => m;

handler.before = async function(m, {conn, command, MessageType, text, usedPrefix, isAdmin}) {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[who];
  const username = conn.getName(who);
  const pp = await conn.profilePictureUrl(who, 'image').catch((_) => './src/avatar_contact.png');

  if ((m.isBaileys && m.fromMe) || m.fromMe ) return true;

  if (chat.chatbot) {
    // ▪AQUÍ AGREGA LOS COMANDOS▪
    const sticker1A = /Xd|xd|xD|XD/i;
    const sticker1B = sticker1A.exec(m.text);

    const sticker2A = /nyan|cat|Nyan|Cat/i;
    const sticker2B = sticker2A.exec(m.text);

    const sticker3A = /Gracias|gracias/i;
    const sticker3B = sticker3A.exec(m.text);

    const sticker4A = /PEDO/i;
    const sticker4B = sticker4A.exec(m.text);

    const sticker5A = /nay/i;
    const sticker5B = sticker5A.exec(m.text);

    const sticker6A = /nay/i;
    const sticker6B = sticker6A.exec(m.text);

    const sticker7A = /nay/i;
    const sticker7B = sticker7A.exec(m.text);

    const sticker8A = /nay/i;
    const sticker8B = sticker8A.exec(m.text);

    const sticker9A = /nay/i;
    const sticker9B = sticker9A.exec(m.text);

    const sticker10A = /nay/i;
    const sticker10B = sticker10A.exec(m.text);

    const sticker11A = /nay/i;
    const sticker11B = sticker11A.exec(m.text);

    const sticker12A = /nay/i;
    const sticker12B = sticker12A.exec(m.text);

    const sticker13A = /nay/i;
    const sticker13B = sticker13A.exec(m.text);

    const sticker14A = /nay/i;
    const sticker14B = sticker14A.exec(m.text);

    const sticker15A = /nay/i;
    const sticker15B = sticker15A.exec(m.text);

    const sticker16A = /nay/i;
    const sticker16B = sticker16A.exec(m.text);

    const sticker17A = /nay/i;
    const sticker17B = sticker17A.exec(m.text);

    const sticker18A = /nay/i;
    const sticker18B = sticker18A.exec(m.text);

    const sticker19A = /nay/i;
    const sticker19B = sticker19A.exec(m.text);

    const sticker20A = /nay/i;
    const sticker20B = sticker20A.exec(m.text);

    const sticker21A = /nay/i;
    const sticker21B = sticker21A.exec(m.text);

    // ▪AQUI AGREGA LOS DIRECTORIOS DEL STICKER A MANDAR▪
    if (sticker1B) {
      const vn = './storage/stickers/xd.webp';
      conn.sendFile(m.chat, vn, 'xd.webp', null, m, true, {type: 'webpMessage', ptt: true, contextInfo: {'forwardingScore': 200, 'isForwarded': false, 'externalAdReply': {showAdAttribution: false, title: `${username}`, body: ``, mediaType: 2, sourceUrl: ``, thumbnailUrl: pp}}}, {quoted: m});
    } else

      if (sticker2B) {
        const emot = pickRandom(['🐢', '🌹', '🌺', '🍂']);
        conn.sendMessage(m.chat, {react: {text: emot, key: m.key}});
      } else

        if (sticker3B) {
          const vn = './storage/stickers/gracias.webp';
          conn.sendFile(m.chat, vn, 'gracias.webp', null, m, true, {type: 'webpMessage', ptt: true});
        } else

          if (sticker4B) {
            const vn = './src/webp/hola.webp';
            conn.sendFile(m.chat, vn, 'hola.webp', null, fkowner, true, {type: 'webpMessage', ptt: true});
          } else

            if (sticker5B) {
              const vn = './src/webp/bot.webp';
              conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
            } else

              if (sticker6B) {
                const vn = './src/webp/bot.webp';
                conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
              } else

                if (sticker7B) {
                  const vn = './src/webp/bot.webp';
                  conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                } else

                  if (sticker8B) {
                    const vn = './src/webp/bot.webp';
                    conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                  } else

                    if (sticker9B) {
                      const vn = './src/webp/bot.webp';
                      conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                    } else

                      if (sticker10B) {
                        const vn = './src/webp/bot.webp';
                        conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                      } else

                        if (sticker11B) {
                          const vn = './src/webp/bot.webp';
                          conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                        } else

                          if (sticker12B) {
                            const vn = './src/webp/bot.webp';
                            conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                          } else

                            if (sticker13B) {
                              const vn = './src/webp/bot.webp';
                              conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                            } else

                              if (sticker14B) {
                                const vn = './src/webp/bot.webp';
                                conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                              } else

                                if (sticker15B) {
                                  const vn = './src/webp/bot.webp';
                                  conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                                } else

                                  if (sticker16B) {
                                    const vn = './src/webp/bot.webp';
                                    conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                                  } else

                                    if (sticker17B) {
                                      const vn = './src/webp/bot.webp';
                                      conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                                    } else

                                      if (sticker18B) {
                                        const vn = './src/webp/bot.webp';
                                        conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                                      } else

                                        if (sticker19B) {
                                          const vn = './src/webp/bot.webp';
                                          conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                                        } else

                                          if (sticker20B) {
                                            const vn = './src/webp/bot.webp';
                                            conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                                          } else

                                            if (sticker21B) {
                                              const vn = './src/webp/bot.webp';
                                              conn.sendFile(m.chat, vn, 'bot.webp', null, m, true, {type: 'webpMessage', ptt: true});
                                            }
  }
  return !0;
};

export default handler;
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
