import {aksaraToLatin} from '@bochilteam/scraper';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `Ubah Aksara Jawa ke Latin\n\nContoh :\n*${usedPrefix + command} ꦲꦭ꧀ꦭꦺꦴ​ꦫꦺꦏ꧀*`;
  const anu = await aksaraToLatin(text);
  m.reply(`*Hasil :*\n${anu}`);
};

handler.help = ['tolatin <teks>'];
handler.tags = ['tools'];
handler.command = /^(aksara)?tolatin$/i;

export default handler;
