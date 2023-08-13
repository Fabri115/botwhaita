const handler = async (m, {conn, text}) => {
  let [namagc, partici] = text.split('|');
  const name = conn.getName(conn.user.jid);
  const owner1 = `3`;
  const owner2 = `393285484506`;
  const owner3 = `393241526425`;
  const petik = '```';
  if (!partici) partici = `@${owner1.split('@')[0]}`;
  if (!namagc) namagc = text;
  const ha = await conn.groupCreate(namagc, conn.parseMention(partici));
};
handler.help = ['buatgrup'];
handler.tags = ['owner', 'premium'];
handler.command = /^(creagruppo)$/i;
handler.premium = true;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;
handler.fail = null;

export default handler;
