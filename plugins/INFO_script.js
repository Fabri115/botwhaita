const handler = async function(m, {conn, __dirname}) {
  m.reply(`*Assaggialoooooo:*\nhttps://github.com/Fabri115/botwhaita`);
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = /^(sc|git|script)$/i;

export default handler;
