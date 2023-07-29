
import fetch from 'node-fetch';
import fs from 'fs';
const handler = async (m, {text, usedPrefix, command, conn}) => {
  const sfoto = fs.readFileSync('./storage/image/sticker.jpg');
  if (!text) throw `*⚠️ Ingrese el nombre del paquete de stickers que desea buscar.*`;

  const json = await fetch(`https://api.akuari.my.id/search/sticker?query=${text}`);
  const jsons = await json.json();
  const res = jsons.result.map((v, index) => `*🪴 • Risultato:* ${1 + index}\n*🌵 • Nome:* ${v.title}\n*🍂 • Url:* ${v.url}`).join`\n\n───\n\n`;
  conn.sendNyanCat(m.chat, res, sfoto, `• Risultato trovato🔎`, m);
};

handler.tags = ['sticker', 'search'];
handler.command = handler.help = ['stickersearch', 'searchsticker'];
export default handler;
