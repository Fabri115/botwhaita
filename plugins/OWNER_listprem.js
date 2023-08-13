const handler = async (m, {conn}) => {
  const prem = global.prems.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter((v) => v != conn.user.jid);
  const textprem = `「 utenti premium 」
` + prem.map((v) => '- @' + v.replace(/@.+/, '')).join`\n`;
  m.reply(textprem, null, {mentions: conn.parseMention(textprem)});
};
handler.help = ['premlist'];
handler.tags = ['owner'];
handler.command = /^(listprem|premlist)$/i;
handler.rowner = true;
export default handler;
