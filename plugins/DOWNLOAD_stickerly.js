import {sticker} from '../lib/sticker.js';
import fetch from 'node-fetch';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `esempio: ${usedPrefix + command} Anya Forger`;
  try {
    const res = await fetch(`https://api.xteam.xyz/sticker/stickerly?q=${args[0]}&APIKEY=${keysxteam}`);
    const json = await res.json();
    for (const data of (json.result.stickerlist || json)) {
      const stikers = await sticker(false, data, global.packname, global.author);
      conn.sendFile(m.chat, stikers, 'sticker.webp', '', m, {asSticker: true});
    }
    // await delay(1500)
  } catch {
    try {
      const res2 = await fetch(`https://api.xteam.xyz/sticker/stickerly?q=${args[0]}&APIKEY=${keysxteam}`);
      const json2 = await res2.json();
      for (const data2 of (json2.result.stickerlist || json2)) {
        const stikers2 = await sticker(false, data2, global.packname, global.author);
        conn.sendFile(m.chat, stikers2, 'sticker.webp', '', m, {asSticker: true});
      }
      // await delay(1500)
    } catch {
      await m.reply('errore');
    }
  }
};
handler.command = /^stickerly$/i;
export default handler;
// const delay = time => new Promise(res => setTimeout(res, time))
