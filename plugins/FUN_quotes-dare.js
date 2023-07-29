import {dare} from '@bochilteam/scraper';

const handler = async (m, {conn, usedPrefix}) => conn.sendButton(m.chat, await dare(), author, [
  ['Dare', `${usedPrefix}dare`],
  ['Truth', `${usedPrefix}truth`],
], m);

handler.help = ['dare'];
handler.tags = ['quotes', 'fun'];
handler.command = /^(obbligo)$/i;

export default handler;
