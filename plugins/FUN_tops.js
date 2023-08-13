import util from 'util';
import path from 'path';
const user = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata, command, conn, participants}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  const b = ps.getRandom();
  const c = ps.getRandom();
  const d = ps.getRandom();
  const e = ps.getRandom();
  const f = ps.getRandom();
  const g = ps.getRandom();
  const h = ps.getRandom();
  const i = ps.getRandom();
  const j = ps.getRandom();

  if (command == 'topgays') {
    const vn = './media/gay2.mp3';
    const top = `🌈𝐓𝐨𝐩 𝟏𝟎 𝐋𝐆𝐁𝐓🌈
    
1. ${user(a)} ${Math.floor(100)}%
2. ${user(b)} ${Math.floor(93)}%
3. ${user(c)} ${Math.floor(85)}%
4. ${user(d)} ${Math.floor(71)}%
5. ${user(e)} ${Math.floor(62)}%
6. ${user(f)} ${Math.floor(55)}%
7. ${user(g)} ${Math.floor(42)}%
8. ${user(h)} ${Math.floor(33)}%
9. ${user(i)} ${Math.floor(27)}%
10. ${user(j)} ${Math.floor(11)}%`;
    m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]});
    conn.sendMessage(m.chat, {quoted: m});
    // conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  }

  if (command == 'topscimmie') {
    const top =    `𝐓𝐨𝐩 𝟏𝟎 *Scimmia*    
    
1. ${user(a)} ${Math.floor(100)}%
2. ${user(b)} ${Math.floor(93)}%
3. ${user(c)} ${Math.floor(85)}%
4. ${user(d)} ${Math.floor(71)}%
5. ${user(e)} ${Math.floor(62)}%
6. ${user(f)} ${Math.floor(55)}%
7. ${user(g)} ${Math.floor(42)}%
8. ${user(h)} ${Math.floor(33)}%
9. ${user(i)} ${Math.floor(27)}%
10. ${user(j)} ${Math.floor(11)}%`;
    m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]});
    conn.sendMessage(m.chat, {quoted: m});
    // conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  }
}
handler.help = handler.command = ['topgays', 'topscimmie'];
handler.tags = ['games'];
handler.group = true;
export default handler;
