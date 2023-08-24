const handler = async (m, {conn, isAdmin}) => {
  const adv = Object.entries(global.db.data.users).filter((user) => user[1].warn);
  const warns = global.db.data.users.warn;
  const user = global.db.data.users;
  const caption = `⚠️ *LISTA WARN*
*╭•·–––––––––––––––––––·•*
│ *Tot : ${adv.length} User* ${adv ? '\n' + adv.map(([jid, user], i) => `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios' : conn.getName(jid) + ` *(${user.warn}/3)*`}
│ ${isAdmin ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`;
  m.reply(caption, null, {mentions: conn.parseMention(caption)});
};

handler.command = /^(listaadv|listwarn|adv|advlist|advlista)$/i;

export default handler;
