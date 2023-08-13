import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) return;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) return;
  if (!media && !/audio/.test(mime)) return;
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) return;
  if (!audio.data && !/video/.test(mime)) return;
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mp4'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true}, {quoted: m});
};
handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;
export default handler;
