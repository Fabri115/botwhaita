import fs from 'fs';
import acrcloud from 'acrcloud';
const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (/audio|video/.test(mime)) {
    if ((q.msg || q).seconds > 20000) return m.reply('[❗𝐈𝐍𝐅𝐎❗]\n\nIl file di caricamento è troppo grande, Suggeriamo di tagliare il grande file su un file più piccolo, 10-20 secondi I dati audio sono sufficienti per identificare');
    const media = await q.download();
    const ext = mime.split('/')[1];
    fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
    const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
    const {code, msg} = res.status;
    if (code !== 0) throw msg;
    const {title, artists, album, genres, release_date} = res.metadata.music[0];
    const txt = `
RISULTATO DELLA RICERCA

• 📌 𝚃𝙸𝚃O𝙻𝙾: ${title}
• 👨‍🎤 𝙰𝚁𝚃𝙸𝚂𝚃𝙰: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'Non trovato'}
• 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'Non trovato'}
• 🌐 𝙶𝙴𝙽𝙴𝚁E: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'Non trovato'}
• 📆 RELEASE: ${release_date || 'Non trovato'}
`.trim();
    fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
    m.reply(txt);
  } else throw '*[❗𝐈𝐍𝐅𝐎❗] RISPONDI AD UN AUDIO*';
};
handler.command = /^quemusica|quemusicaes|whatmusic$/i;
export default handler;
