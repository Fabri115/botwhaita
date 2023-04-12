import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `HEY 👋 *${name}* VUOI PARLARE UN PO? SCRIVIMI\n\nESEMPIO : *${usedPrefix + command}* HEY FABRI`
  m.react('🗣️') 
  await conn.sendPresenceUpdate('composing', m.chat)
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "en" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=en`)
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux'))
  else throw json
}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['ai', 'simi'] 
handler.register = true

export default handler
