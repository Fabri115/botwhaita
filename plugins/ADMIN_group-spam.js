const handler = async (m, {conn, text, isOwner, usedPrefix, command}) => {
  if (!text) return conn.reply(m.chat, '!', m);

  const pesan = `${text}`;
  await m.reply('*SPAM!*\n\nNote :');
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);
  await m.reply(pesan);

  conn.reply(m.chat, '📮 𝓔𝓢𝓢𝓔𝓝𝓣𝓘𝓐𝓛 𝓑𝓞𝓣 ✦ᵉᵈᶦᶻ ᴹᵒᵒⁿᶜˡᵒᵘᵈˢ', m);
};
handler.help = ['groupspam'].map((v) => v + ' <teks>');
handler.tags = ['group'];
handler.command = /^(groupspam)$/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = true;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;
handler.exp = 100;
handler.limit = true;

export default handler;
