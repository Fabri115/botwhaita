let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) return 
	
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!code) return
  let owbot = global.owner[1] 
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      return
      }
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['owner']
handler.command = ['join'] 

//handler.owner = true

export default handler