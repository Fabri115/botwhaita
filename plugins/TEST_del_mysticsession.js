import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs } from "fs";
import path, { join } from 'path';

let handler = async (m, { conn }, args) => {
  let parentw = conn;
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let uniqid = `${who.split`@`[0]}`;

  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, { text: 'Utilizza questo comando direttamente sul numero principale del Bot' }, { quoted: m });
  } else {
    await conn.sendMessage(m.chat, { text: "👋 Bang, Ora mi vedi" }, { quoted: m });
  }

  try {
    const sessionPath = "./MysticSession/";
    const files = await fs.readdir(sessionPath);
    for (const file of files) {
      await fs.unlink(path.join(sessionPath, file));
    }
    await conn.sendMessage(m.chat, { text: "Tutti i file della Sessione sono stati eliminati" }, { quoted: m });
  } catch (err) {
    console.error('La cartella o il file di sessione non esistono', err);
  }
};

handler.help = ['deletebot'];
handler.tags = ['jadibot'];
handler.command = /^(deletebot|eliminarsesion|deletesesion|ds)$/i;
handler.owner = true;
export default handler;