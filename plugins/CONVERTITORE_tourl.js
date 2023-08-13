import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = q.mediaType || '';
  if (/image|video|audio|sticker|document/.test(mime)) {
    const media = await q.download(true);
    const data = await uploadFile(media);
    m.reply(data.files[0].url);
  } else throw 'No media found';
};
handler.help = ['tourl2'];
// handler.tags = ['tools']
handler.command = /^(tourl)$/i;

export default handler;

async function uploadFile(path) {
  const form = new FormData();
  form.append('files[]', fs.createReadStream(path));
  const res = await (await fetch('https://uguu.se/upload.php', {
    method: 'post',
    headers: {
      ...form.getHeaders(),
    },
    body: form,
  })).json();
  await fs.promises.unlink(path);
  return res;
}
