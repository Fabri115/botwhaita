let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
    const grup = './Menu2.jpg';
    const menuText = `
Lista Attiva/Disattiva:

✨ | Benvenuto: ${usedPrefix + command} benvenuto
🚫 | Antidelete: ${usedPrefix + command} antidelete
🚫 | AntiPaki: ${usedPrefix + command} antipaki
🚫 | Delete: ${usedPrefix + command} delete
🌎 | Public: ${usedPrefix + command} public
🔗 | Antilink: ${usedPrefix + command} antilink
🔗 | AntilinkGP: ${usedPrefix + command} antilinkgp
👁️ | Antiviewonce: ${usedPrefix + command} antiviewonce
🚧 | Autosticker: ${usedPrefix + command} autosticker
🚫 | AntiSpam: ${usedPrefix + command} antispam
📛 | AntiTrava: ${usedPrefix + command} antitrava
🔎 | Detect: ${usedPrefix + command} detect
❗ | Restrict: ${usedPrefix + command} restrick
😐 | AntiChiamata: ${usedPrefix + command} anticall
😐 | AntiPrivato: ${usedPrefix + command} antiprivato
☑️ | Autoread: ${usedPrefix + command} autoread
💬 | SoloPrivato: ${usedPrefix + command} soloprivato
💬 | ChatBot: ${usedPrefix + command} chatbot
🏢 | SoloGruppo: ${usedPrefix + command} sologruppo
📷 | StatusOnly: ${usedPrefix + command} swonly
`;

 
let isEnable = /true|enable|attiva|(turn)?on|1/i.test(command)
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
case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.chatbot = isEnable
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
            conn.reply(m.chat, menuText, null, { contextInfo: { mentionedJid: [conn.user.jid] } });
            break;
    }
	conn.reply(m.chat, `${type} ${isEnable ? '✓ 𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐨' : '✗ 𝐝𝐢𝐬𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐨'}`, null, [[`${isEnable ? 'disabilita ' : '𝐚𝐭𝐭𝐢𝐯𝐚'}`, `${isEnable ? `${usedPrefix}0 ${type}` : `${usedPrefix}1 ${type}`}`]], m)}



handler.help = ['en', 'dis'].map(v => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((attiva|disabilita)|(turn)?o(n|ff)|[01])$/i;

export default handler;