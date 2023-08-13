import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://cataas.com/cat');
    const img = await res.buffer();
    const caption = `
*OH MA QUESTA E UNA TIGRE*
`.trim();
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m);
  } catch (e) {
    console.log(e);
    throw '*Error!*';
  }
};
handler.help = ['cat'];
handler.tags = ['random'];
handler.command = 'gatto';
handler.fail = null;
export default handler;
