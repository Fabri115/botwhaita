import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command}) => {
  if (!text) throw `dica??`;
  await m.reply('aspe...');
  const zykomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino_2&text=${text}&user=user-unique-id`);
  const hasil = await zykomd.json();
  m.reply(`${hasil.result}`.trim());
};
handler.help = ['ai', 'openai'];
handler.tags = ['fun'];
handler.command = /^(aii)$/i;
export default handler;

