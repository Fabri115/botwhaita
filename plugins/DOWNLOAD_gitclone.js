
import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `Inserisci un link di una repository github\n\n📌 Esempio : ${usedPrefix + command} https://github.com/Fabri115/botwhaita`;
  if (!regex.test(args[0])) throw '⚠️ link non corretto o repo non esistente';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];

  m.reply(`✳️ *Aspetto, scarico la repository..*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['dl'];
handler.command = ['gitclone'];
handler.diamond = true;

export default handler;
