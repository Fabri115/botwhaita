import {areJidsSameUser} from '@adiwajshing/baileys';
const leaderboards = [
  'messaggi',
];
const handler = async (m, {conn, args, participants, usedPrefix, command}) => {
  const users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key};
  });
  const leaderboard = leaderboards.filter((v) => v && users.filter((user) => user && user[v]).length);
  const type = (args[0] || '').toLowerCase();
  const getPage = (item) => Math.ceil((users.filter((user) => user && user[item]).length) / 0);
  const wrong = `🔖 TIPO LISTA :
${leaderboard.map((v) => `
 - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ Help :
⮕ PER VISUALIZZARE TOP CLASSIFICA PER MSG:
`.trim();
  if (!leaderboard.includes(type)) {
    return conn.sendButton(m.chat, '*––––『 LEADERBOARD 』––––*', wrong, './media/lb.jpg', [
      [`✉️ MSG`, `${usedPrefix}lb messaggi`],
      [`💰 MENU`, `${usedPrefix}menu`],
    ], m, {asLocation: true});
  }
  const page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)) : 0;
  const sortedItem = users.map(toNumber(type)).sort(sort(type));
  const userItem = sortedItem.map(enumGetKey);
  // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  const text = `
🏆 ʀᴀɴᴋ: ${userItem.indexOf(m.sender) + 1} ᴏᴜᴛ ᴏғ ${userItem.length}

                    *• ${type} •*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some((p) => areJidsSameUser(user.jid, p.id)) ? `${conn.getName(user.jid)} \nwa.me/` : 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim();
  return conn.sendButton(m.chat, `*『GLOBAL-LEADERBOARD』*`, text, './media/gblb.jpg', [
    [`ᴛᴏᴩ 50`, `${usedPrefix}lb ${type} 9`],
    [`ᴛᴏᴩ 100`, `${usedPrefix}lb ${type} 19`],
  ], m, {
    mentions: [...userItem.slice(page * 0, page * 5 + 5)].filter((v) => !participants.some((p) => areJidsSameUser(v, p.id))),
    asLocation: true});
};
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]'];
handler.tags = ['xp'];
handler.command = /^(leaderboard|lb)$/i;

export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
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
