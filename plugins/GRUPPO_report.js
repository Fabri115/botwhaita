const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗]INSERISCI IL PROBLEMA O LA MODIFICA*\n\n*Esempio:*\n*${usedPrefix + command} IL COMANDO ${usedPrefix}PLAY NON INVIA NULLA*`;
  if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] IL REPORT O LA MOD DEVE ESSERE DI MINIMO 10 CARATTERI!*`;
  if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] IL REPORT O LA MOD DEVE ESSERE DI MASSIMO 1000 CARATTERI!*`;
  const teks = `*❒═════[𝑹𝑬𝑷𝑶𝑹𝑻/𝑴𝑶𝑫]═════❒*\n*┬*\n*├❧ NUMERO:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ MESSAGGIO:* ${text}\n*┴*`;
  conn.reply('390371717717@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*[ ✔️ ] REPORT O MODIFICA INVIATA A FABRI, SE RISULTERA FALSA VERRA IGNORATA*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|mod)$/i;
export default handler;

