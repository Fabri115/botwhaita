import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `*L'utente deve ancora scrivere un msg*`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let { name, exp, messaggi, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex') 
    let text = `
┏━━✯✯✯✯✯✯✯✯✯━━┓
                   *_Attività_* 
 ⋄ *Nome* : @${user.name} 
 ⋄ *Messaggi* : *${global.db.data.users[who].messaggi}*

 • *NOTA :* 
 *_I msg vengono calcolati da quando il bot è attivo_*
                ᵉᵈᶦᶻ ᴹᵒᵒⁿᶜˡᵒᵘᵈˢ

┗━━✯✯✯✯✯✯✯✯✯━━┛
`
conn.reply(m.chat, text, m, { mentions: [m.sender] })
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = /^bal$/i 
export default handler
