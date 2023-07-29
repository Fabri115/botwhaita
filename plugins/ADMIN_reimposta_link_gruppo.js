/* Creditos a https://github.com/ALBERTO9883 */

let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)}
handler.command = ['reimposta', 'revoke']
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
