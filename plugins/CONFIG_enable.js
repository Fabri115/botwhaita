const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const grup = './Menu2.jpg';
  const { benvenuto, antidelete, antipaki, delete: del , public: publico, antilink, antilinkgp, antiinsta, antiviewonce, autosticker, antispam, antitrava, detect, restrict, anticall, antiprivato, autoread, soloprivato, chatbot, sologruppo, swonly } = global.db.data.chats[m.chat]
  const optionsFull = `
Lista Attiva/Disattiva:
╭──» ${wm} 𓃠 «───✦
┊ ✨ |${benvenuto ? '√' : 'ﾒ'} |Benvenuto: ${usedPrefix + command} benvenuto
┊ 🚫 |${antidelete ? '√' : 'ﾒ'} |Antidelete: ${usedPrefix + command} antidelete
┊ 🚫 |${antipaki ? '√' : 'ﾒ'} |AntiPaki: ${usedPrefix + command} antipaki
┊ 🚫 |${del ? '√' : 'ﾒ'} |Delete: ${usedPrefix + command} delete
┊ 🌎 |${publico ? '√' : 'ﾒ'} |Public: ${usedPrefix + command} public
┊ 🔗 |${antilink ? '√' : 'ﾒ'} |Antilink: ${usedPrefix + command} antilink
┊ 🔗 |${antilinkgp ? '√' : 'ﾒ'} |AntilinkGP: ${usedPrefix + command} antilinkgp
┊ 🔗 |${antiinsta ? '√' : 'ﾒ'} |AntilinkINSTA: ${usedPrefix + command} antiinsta
┊ 👁️ |${antiviewonce ? '√' : 'ﾒ'} |Antiviewonce: ${usedPrefix + command} antiviewonce
┊ 🚧 |${autosticker ? '√' : 'ﾒ'} |Autosticker: ${usedPrefix + command} autosticker
┊ 🚫 |${antispam ? '√' : 'ﾒ'} |AntiSpam: ${usedPrefix + command} antispam
┊ 📛 |${antitrava ? '√' : 'ﾒ'} | AntiTrava: ${usedPrefix + command} antitrava
┊ 🔎 |${detect ? '√' : 'ﾒ'} | Detect: ${usedPrefix + command} detect
┊ ❗ |${restrict ? '√' : 'ﾒ'} |Restrict: ${usedPrefix + command} restrict
┊ 😐 |${anticall ? '√' : 'ﾒ'} |AntiChiamata: ${usedPrefix + command} anticall
┊ 😐 |${antiprivato ? '√' : 'ﾒ'} |AntiPrivato: ${usedPrefix + command} antiprivato
┊ ☑️ |${autoread ? '√' : 'ﾒ'} |Autoread: ${usedPrefix + command} autoread
┊ 💬 |${soloprivato ? '√' : 'ﾒ'} |SoloPrivato: ${usedPrefix + command} soloprivato
┊ 💬 |${chatbot ? '√' : 'ﾒ'} |ChatBot: ${usedPrefix + command} chatbot
┊ 🏢 |${sologruppo ? '√' : 'ﾒ'} |SoloGruppo: ${usedPrefix + command} sologruppo
┊ 📷 |${swonly ? '√' : 'ﾒ'} |StatusOnly: ${usedPrefix + command} swonly
╰────────────✦`;


  const isEnable = /true|enable|attiva|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'benvenuto':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;

    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;

    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;

    case 'chatbot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.chatbot = isEnable;
      break;

    case 'antielimina':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = !isEnable;
      break;

    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;

    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;

    case 'antilinkgp':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLinkgp = isEnable;
      break;

    case 'antiinsta':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiinsta = isEnable;
      break;

    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;

    case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiSpam = isEnable;
      break;

    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;

    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;

    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;

    case 'restrict':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;

    case 'autoread':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['autoread'] = isEnable;
      break;

    case 'pconly':
    case 'soloprivato':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;

    case 'gconly':
    case 'sologruppo':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;

    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;

    case 'anticall':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;

    case 'antiprivato':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;

    case 'antitrava':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;

    case 'antipaki':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;

    default:
    if (!/[]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
       throw false;
}
  conn.reply(m.chat, `${type} ${isEnable ? '√ 𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐨' : '✗ 𝐝𝐢𝐬𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐨'}`, null, [[`${isEnable ? 'disabilita ' : '𝐚𝐭𝐭𝐢𝐯𝐚'}`, `${isEnable ? `${usedPrefix}0 ${type}` : `${usedPrefix}1 ${type}`}`]], m);
};


handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((attiva|disabilita)|(turn)?o(n|ff)|[01])$/i;

export default handler;
