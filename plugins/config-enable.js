let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: null,
rows: [
{title: "𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨", description: null, rowId: `${usedPrefix}benvenuto`},
{title: "𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤", description: null, rowId: `${usedPrefix}antilink`},
{title: "𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝐡𝐚𝐫𝐝", description: null, rowId: `${usedPrefix}antilinkhard`},
{title: "𝐚𝐧𝐭𝐢𝐬𝐩𝐚𝐦", description: null, rowId: `${usedPrefix}antispam`},
{title: "𝐝𝐞𝐭𝐞𝐜𝐭", description: null, rowId: `${usedPrefix}detect`},
{title: "𝐚𝐧𝐭𝐢𝐞𝐥𝐢𝐦𝐢𝐧𝐚", description: null, rowId: `${usedPrefix}antielimina`},
{title: "𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞", description: null, rowId: `${usedPrefix}antiviewonce`},
{title: "𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐯𝐚", description: null, rowId: `${usedPrefix}antitrava`},
{title: "𝐚𝐧𝐭𝐢𝐩𝐚𝐤𝐢", description: null, rowId: `${usedPrefix}antipaki`},
{title: "𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧", description: null, rowId: `${usedPrefix}modoadmin`},
{title: "𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫", description: null, rowId: `${usedPrefix}autosticker`},
]}, ]
let name = await conn.getName(m.sender)
let frocioni = `Admin ${name}`
const listMessage = {
text: '\n𝐀𝐓𝐓𝐈𝐕𝐀/𝐃𝐈𝐒𝐀𝐓𝐓𝐈𝐕𝐀',
footer: null,
title: null,
buttonText: frocioni,
sections}

let isEnable = /true|Enable|attiva|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'benvenuto':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antielimina':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilinkhard':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilinkgp':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antilinkbase = isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antilinkbase2 = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable
break
case 'antispam':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiSpam = isEnable
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'soloprivato':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'sologruppo':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivato':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'antitrava':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antipaki':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) {
if (isAdmin) return conn.sendMessage(m.chat, listMessage, m)
throw false }
}
conn.sendButton(m.chat, `${type} ${isEnable ? '✓ 𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐨' : '✗ 𝐝𝐢𝐬𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐨'}`, null, [[`${isEnable ? '𝐝𝐢𝐬𝐚𝐭𝐭𝐢𝐯𝐚' : '𝐚𝐭𝐭𝐢𝐯𝐚'}`, `${isEnable ? `${usedPrefix}0 ${type}` : `${usedPrefix}1 ${type}`}`]], m)}
handler.help = ['frocio', 'gay'].map(v => v + '<option>')
handler.tags = ['group', 'owner']
handler.command = /^((on|off)|(attiva|disabilita)|(turn)?[01])$/i
export default handler
