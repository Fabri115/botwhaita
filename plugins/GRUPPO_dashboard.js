const handler = async (m, {conn}) => {
  let stats = Object.entries(db.data.stats).map(([key, val]) => {
    const name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' & ') : plugins[key]?.help || key;
    if (/exec/.test(name)) return;
    return {name, ...val};
  });
  stats = stats.sort((a, b) => b.total - a.total);
  const txt = stats.slice(0, 10).map(({name, total, last}, idx) => {
    if (name.includes('-') && name.endsWith('.js')) name = name.split('-')[1].replace('.js', '');
    return `(${idx + 1})\n📚 • *_Comando :_* *${name}*\n🗂 • *_Utilizzato :_* *${total}x*\n⛾ • *_Ultimo Utilizzo :_* *${getTime(last)}*`;
  }).join`\n\n`;
  m.reply(`Dashboard *${conn.user.name}*\n\n${txt}`);
};
handler.help = ['dashboard'];
handler.tags = ['info'];
handler.command = /^dashboard$/i;

export default handler;

export function parseMs(ms) {
  if (typeof ms !== 'number') throw 'Parameter must be filled with number';
  return {
    days: Math.trunc(ms / 86400000),
    hours: Math.trunc(ms / 3600000) % 24,
    minutes: Math.trunc(ms / 60000) % 60,
    seconds: Math.trunc(ms / 1000) % 60,
    milliseconds: Math.trunc(ms) % 1000,
    microseconds: Math.trunc(ms * 1000) % 1000,
    nanoseconds: Math.trunc(ms * 1e6) % 1000,
  };
}

export function getTime(ms) {
  const now = parseMs(+new Date() - ms);
  if (now.days) return `${now.days} giorni fa`;
  else if (now.hours) return `${now.hours} ore fa`;
  else if (now.minutes) return `${now.minutes} minuti fa`;
  else return `un secondo fa`;
}
