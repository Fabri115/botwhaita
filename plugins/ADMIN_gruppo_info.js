const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antiArab, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antilinkbase, modohorny, antiSpam, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 Info gruppo 」*\n
┃⋄ Nome
   • ${groupMetadata.subject}

┃⋄ Descrizione
   • ${groupMetadata.desc?.toString() || 'nessuna descrizione'}

┃⋄ Membri
   • ${participants.length} Participanti

┃⋄ Founder
   • ${owner.split('@')[0]}


┃⋄ *🪢 Configurazione del gruppo:*
   • ${isBanned ? '✅' : '❎'} Gruppo Ban
   • ${welcome ? '✅' : '❎'} Benvenuto
   • ${detect ? '✅' : '❎'} Detect sul bot
   • ${del ? '❎' : '✅'} Anti Delete
   • ${antiLink ? '✅' : '❎'} Anti Link HARD
   • ${antilinkbase ? '✅' : '❎'} Anti Link 
   • ${antiArab ? '✅' : '❎'} Anti Paki
   • ${antiSpam ? '✅' : '❎'} Anti Spam
   • ${modoadmin ? '✅' : '❎'} ModoAdmin
   • ${antiTraba ? '✅' : '❎'} Anti Trava

*┃⋄  📬 Configurazione messaggi:*
   • Benvenuto: ${sWelcome}
   • Addio: ${sBye}
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {reply: [...participants.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogruppo|status|info(gro?up|gc))$/i;
handler.group = true;
export default handler;
