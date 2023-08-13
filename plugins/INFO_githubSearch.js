import fetch from 'node-fetch';
const handler = async (m, {text}) => {
  if (!text) throw 'cosa devo cercare?';
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  const str = json.items.map((repo, index) => {
    return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Creato *${formatDate(repo.created_at)}*_
_Ultimo aggiornamento *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Descrizione:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim();
  }).join('\n\n');
  m.reply(str);
};
handler.help = ['githubs'];
handler.tags = ['tools'];
handler.command = /^(ghs|githubs)?$/i;

export default handler;

function formatDate(n, locale = 'it') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}
