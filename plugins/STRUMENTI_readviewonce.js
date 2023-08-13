
const {downloadContentFromMessage} = (await import('@whiskeysockets/baileys'));

const handler = async (m, {conn}) => {
  if (!m.quoted) throw '✳️ Responde a un mensaje';
  if (m.quoted.mtype !== 'viewOnceMessageV2') throw '✳️ Eso no es un mensaje de viewOnce';
  const msg = m.quoted.message;
  const type = Object.keys(msg)[0];
  const media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
  let buffer = Buffer.from([]);
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  if (/video/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m);
  } else if (/image/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m);
  }
};

handler.help = ['readvo'];
handler.tags = ['tools'];
handler.command = ['readviewonce', 'read', 'nocap', 'readvo'];
export default handler;
