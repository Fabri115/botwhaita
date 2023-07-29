const handler = async (m, {conn}) => {
  await conn.fetchBlocklist().then(async (data) => {
    let txt = `𝐋𝐢𝐬𝐭𝐚 𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐢 👨🏻‍✈️\n\n𝐓𝐨𝐭𝐚𝐥𝐞 : ${data.length}\n\n┌─⊷\n`;
    for (const i of data) {
      txt += `▢ @${i.split('@')[0]}\n`;
    }
    txt += '└───────────';
    return conn.reply(m.chat, txt, m, {mentions: await conn.parseMention(txt)});
  }).catch((err) => {
    console.log(err);
    throw '𝐍𝐞𝐬𝐬𝐮𝐧 𝐮𝐭𝐞𝐧𝐭𝐞 𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐨';
  });
};
handler.help = ['blocklist'];
handler.tags = ['main'];
handler.command = ['blocklist', 'listblock'];
handler.rowner = true;
export default handler;
