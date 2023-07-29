const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

const handler = async (m, {conn, text, isOwner, usedPrefix, command}) => {
  if (!text) return;
  const [_, code, expired] = text.match(linkRegex) || [];
  if (!code) return;
  const res = await conn.groupAcceptInvite(code);
  // await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`. . .`);
  await conn.sendMessage(res, {text: '*chat.whatsapp.com/BkkpEpAa4DlDWf8nF4qogl*', mentions: (await conn.groupMetadata(`${res}`)).participants.map((v) => v.id)});
  await conn.groupLeave(res);
};

handler.help = ['spamjp'];
handler.tags = ['premium'];
handler.command = ['spamgpal'];

handler.owner = true;

export default handler;
