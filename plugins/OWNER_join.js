const handler = async (m, {conn, text, usedPrefix, command, args, participants, isOwner}) => {
  if (!isOwner) return;

  const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  const delay = (time) => new Promise((res) => setTimeout(res, time));

  const name = m.sender;
  const [_, code] = text.match(linkRegex) || [];
  if (!code) return;
  const owbot = global.owner[1];
  await delay(3000);
  try {
    const res = await conn.groupAcceptInvite(code);
    const b = await conn.groupMetadata(res);
    const d = b.participants.map((v) => v.id);
    const member = d.toString();
    const e = await d.filter((v) => v.endsWith(owbot + '@s.whatsapp.net'));
  } catch (e) {
    conn.reply(global.owner[1]+'@s.whatsapp.net', e);
    return;
  }
};
handler.help = ['join <chat.whatsapp.com>'];
handler.tags = ['owner'];
handler.command = ['join'];

// handler.owner = true

export default handler;
