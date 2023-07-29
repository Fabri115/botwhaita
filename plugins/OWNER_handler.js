/* eslint-disable max-len */
import fs from 'fs';
const handler = async (m, {conn, text}) => {
  m.reply('Tunggu Sebentar, Sedang mengambil file Config.js');
  const sesi = await fs.readFileSync('./handler.js');
  return await conn.sendMessage(m.chat, {document: sesi, mimetype: 'application/json', fileName: 'handler.json'}, {quoted: m});
};
handler.help = ['getconfig'];
handler.tags = ['owner'];
handler.command = /^(gethand)$/i;

handler.rowner = true;

export default handler;
