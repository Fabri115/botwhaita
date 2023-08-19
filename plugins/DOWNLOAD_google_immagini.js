import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return;
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  const captionn = `🔎 𝐑𝐢𝐬𝐮𝐥𝐭𝐚𝐭𝐨 𝐩𝐞𝐫 ${text}`;
  conn.sendMessage(m.chat, captionn, author, link, m);
};
handler.help = ['cerca <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(cerca)$/i;
export default handler;
