import {areJidsSameUser} from '@adiwajshing/baileys';

const leaderboards = [
  'messaggi',
];
const handler = async (m, {
  conn,
  args,
  participants,
  usedPrefix,
  command,
  groupMetadata,
}) => {
  const users = Object.entries(db.data.chats).map(([key, value]) => {
    return {
      ...value,
      subject: key,
    };
  });
  const leaderboard = leaderboards.filter((v) => v && users.filter((chats) => chats && chats[v]).length);
  const type = (args[0] || '').toLowerCase();
  const getPage = (item) => Math.ceil((users.filter((chats) => chats && chats[item]).length) / 25);
  const wrong = `
Use format *${usedPrefix}${command} [type] [page]*
example *${usedPrefix}${command} messaggi 1*

📍 Type list
${leaderboard.map((v) => `
${v}
`.trim()).join('\n')}
`.trim();
  if (!leaderboard.includes(type)) return m.reply(wrong);
  const page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)) : 0;
  const sortedItem = users.map(toNumber(type)).sort(sort(type));
  const userItem = sortedItem.map(enumGetSubject);
  // var len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  const text = `${sortedItem.slice(page * 5, page * 5 + 5).map((user, i) => `${i + 1}. ${participants.some((p) => isJidGroup(user.subject, p.subject)) ? `(${groupMetadata.subject}) ` : '@'}${user.subject.split`@`[0]} *${user[type]} ${type}*`).join`\n`}
`.trim();
  return m.reply(text, null, {
    mentions: [...userItem.slice(page * 5, page * 5 + 5)].filter((v) => !participants.some((p) => isJidGroup(v, p.id))),
  });
};
handler.help = ['leaderboard *jumlah user*', 'lb *jumlah user*'];
handler.tags = ['xp'];
handler.command = /^(gruppi)$/i;

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

function enumGetSubject(a) {
  return a.subject;
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
