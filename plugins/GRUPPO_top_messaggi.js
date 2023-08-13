import {areJidsSameUser} from '@whiskeysockets/baileys';

const leaderboards = [
  'messaggi',
];
const handler = async (m, {
  conn,
  args,
  participants,
  usedPrefix,
  command,
}) => {
  if (!m.chat) {

  }
  const groupId = m.chat.id;
  const users =
    Object.entries(db.data.chats[groupId]).map(([key, value]) => {
      return {
        ...value,
        Id: key,
      };
    });
  const leaderboard = leaderboards.filter((v) => v && users.filter((user) => user && user[v]).length);
  const type = (args[0] || '').toLowerCase();
  const getPage = (item) => Math.ceil((users.filter((user) => user && user[item]).length) / 25);
  const wrong = `
Usa il formato *${usedPrefix}${command} [messaggi]*

📍 Tipo di lista:
${leaderboard.map((v) => `
${v}
`.trim()).join('\n')}
`.trim();
  if (!leaderboard.includes(type)) return m.reply(wrong);
  const page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)) : 0;
  const sortedItem = users.map(toNumber(type)).sort(sort(type));
  const userItem = sortedItem.map(enumGetKey);
  // var len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  const text = `
• * Top 50 ${type}* •

Tu sei: *${userItem.indexOf(m.sender) + 1}* of *${userItem.length}*

${sortedItem.slice(page * 50, page * 50 + 50).map((user, i) => `${i + 1}. ${participants.some((p) => areJidsSameUser(user.jid, p.id)) ? `${conn.getName(user.jid)} wa.me/` : '@'}${user.jid.split`@`[0]} *${user[type]} ${type}*`).join`\n`}
`.trim();
  return m.reply(text, null, {
    mentions: [...userItem.slice(page * 50, page * 50 + 50)].filter((v) => !participants.some((p) => areJidsSameUser(v, p.id))),
  });
};
handler.help = ['leaderboard *jumlah user*', 'lb *jumlah user*'];
handler.tags = ['xp'];
handler.command = /^(top)$/i;

export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {
        ...b[i],
        [property]: a[property] === undefined ? _default : a[property],
      };
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}


/**
 * Detect Number
 * @param {Number} x
 */
function isNumber(number) {
  if (!number) return number;
  number = parseInt(number);
  return typeof number == 'number' && !isNaN(number);
}
