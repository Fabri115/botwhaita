import fetch from 'node-fetch';
const handler = (m) => m;

handler.before = async (m) => {
  const chat = global.db.data.chats[m.chat];
  if (chat.simi) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
    if (!m.text) return;
    const ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(m.text)}&lc=` + lenguajeGB.lenguaje());
    const data = await ressimi.json();
    if (data.success == 'No s\u00e9 lo qu\u00e9 est\u00e1s diciendo. Por favor ense\u00f1ame.') return 0;
    await m.reply(data.success);
    return !0;
  }
  return true;
};
export default handler;
