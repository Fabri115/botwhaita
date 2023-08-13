import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return;
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  const captionn = `🔎 𝐑𝐢𝐬𝐮𝐥𝐭𝐚𝐭𝐨 𝐩𝐞𝐫 ${text}`;
  conn.sendButton(m.chat, captionn, author, link, [['𝐩𝐫𝐨𝐬𝐬𝐢𝐦𝐚 𝐢𝐦𝐦𝐚𝐠𝐢𝐧𝐞', `#cerca ${text}`]], m);
};
handler.help = ['cerca <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(cerca)$/i;
export default handler;
