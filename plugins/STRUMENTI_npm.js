import fetch from 'node-fetch';

const handler = async (m, {text}) => {
  if (!text) throw 'Input Query';
  const res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`);
  const {objects} = await res.json();
  if (!objects.length) throw `Query "${text}" not found :/`;
  const txt = objects.map(({package: pkg}) => {
    return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`;
  }).join`\n\n`;
  m.reply(txt);
};
handler.help = ['npmsearch'];
handler.tags = ['tools'];
handler.command = /^npm(js|search)?$/i;

export default handler;
