/* Creditos a https://github.com/ALBERTO9883 */

const handler = async (m, {conn}) => {
  const revoke = await conn.groupRevokeInvite(m.chat);
};
handler.command = ['reimposta', 'revoke'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;
