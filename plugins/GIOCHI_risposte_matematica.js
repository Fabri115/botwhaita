global.math = global.math ? global.math : {};
const handler = async (m, {conn}) => {
  const id = m.chat;
  if (!m.quoted) return;
  if (m.quoted.sender != conn.user.jid) return;
  if (!/^quanto fa/i.test(m.quoted.text)) return;
  if (!(m.chat in global.math)) return;
  if (m.quoted.id == global.math[id][0].id) {
    const math = global.math[id][1];
    if (m.text == math.result) {
      conn.sendButton(m.chat, `*giusto*`, author, null, [['gioca di nuovo', `/math ${math.mode}`]], m);
      global.db.data.users[m.sender].exp += math.bonus;
      clearTimeout(global.math[id][3]);
      delete global.math[id];
    } else {
      if (--global.math[id][2] == 0) {
        conn.sendButton(m.chat, `*la risposta era: ${math.result}*`, author, null, [['gioca di nuovo', `/math ${math.mode}`]], m);
        clearTimeout(global.math[id][3]);
        delete global.math[id];
      } else conn.reply(m.chat, `*sbagliato*\n*ancora disponibili ${global.math[id][2]} chance*`, m);
    }
  }
};
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/;
handler.command = new RegExp;
export default handler;
