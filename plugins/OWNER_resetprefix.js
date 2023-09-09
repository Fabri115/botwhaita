const handler = async (m, {conn, text}) => {
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`[❗𝐈𝐍𝐅𝐎❗] Il prefisso è stato reimpostato.`);
};
handler.help = ['resetprefix'];
handler.tags = ['owner'];
handler.customPrefix = /fixprefix/i
handler.command = new RegExp
export default handler;