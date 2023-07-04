let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'aperto': 'not_announcement',
'chiuso': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
formato errato
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group open / close', 'gruppo aperto / chiuso']
handler.tags = ['group']
handler.command = /^(group|gruppo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
