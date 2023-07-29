/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let regex = /x/g
if (!text) throw `Input Valid Number`
	if (!text.match(/x/g)) throw `*Example :* ${usedPrefix + command} ${m.sender.split('@')[0]}x`
	if (text.match(/x/g).length > 2 ) throw `Troppe "x" Smettila Dani!`
	let detect = text.replace(/[^0-9|x]/g, '')
let random = text.match(regex).length, total = Math.pow(10, random), array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch(_ => {})
array.push({ exists: true, jid: result, ...info })
} else {
array.push({ exists: false, jid: result })
}}
let txt = 'Registrato\n\n' + array.filter(v => v.exists).map(v => `• Num: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'Sin descripcion'}\n*• Data:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*Non registrato*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
m.reply(txt)
}
handler.command = /^nowa$/i
handler.owner = true
export default handler
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })}
