
let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {

  let chat = global.db.data.chats[m.chat]
  let te = `
  ┌─⊷ *Evento*
  ▢ benvenuto
  ▢ addio
  ▢ promuovi
  ▢ retrocedi
  └───────────
  
  📌 Ejemplo :
  
  *${usedPrefix + command}* welcome @user`

if (!event) return await m.reply(te) 

let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`✅ Simulando ${event}...`)
switch (event.toLowerCase()) {
        case 'add':
        case 'benvenuto':
        case 'invite':
        case 'welcome':
           act = 'add'
         break 
        case 'bye':
        case 'addio':
        case 'leave':
        case 'remove':
         act = 'remove'
        break

        case 'promote':
        case 'promuovi':
          act = 'promote'
        break
    

        case 'demote':
        case 'retrocedi':
         act = 'demote'
        break

default:

throw te
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})
}
handler.help = ['simulate <event> @user']
handler.tags = ['group']
handler.command = ['si'] 
handler.admin = true
handler.group = true

export default handler
