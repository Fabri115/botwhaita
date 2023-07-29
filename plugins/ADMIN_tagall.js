let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
var sum = member.length
} else {
var sum = 0
var total = 0
var member = 0
}
let pesan = args.join` `
let oi = `${pesan}`
let teks = `✦✧✧ 𝐒vͤΞGL𝕀𝐀  ✧✧✦\n\n *Membri  :  ${participants.length}* ${oi}\n\n┌──⭓ 𝐓𝐨𝐫𝐧𝐚𝐭𝐞 𝐨𝐧\n`
for (let mem of participants) {
teks += `│⭔ @${mem.id.split('@')[0]}\n`}
teks += `└───────⭓

✦✧✧𝐁Ꮻ𝐓 ✧✧✦ `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i
handler.admin = true
handler.group = true
export default handler
