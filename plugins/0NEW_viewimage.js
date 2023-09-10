/* view immagine */

let handler = async (m, { text }) => {
  if (!text) throw `Inserisci il nome e la cartella dell'immagine che vuoi visualizzare.`;
  let ext = text.split('.').pop();
  let path = `${text}`;
  if (!fs.existsSync(path)) throw `L'immagine non esiste nella cartella principale.`;
  let media = await fs.readFileSync(path);
  let mimeType = `image/${ext}`;
  m.reply(media, null, { thumbnail: await (await fetch(`data:${mimeType};base64,${media.toString('base64')}`)).buffer() });
};

handler.help = ['viewimage <nome>'];
handler.tags = ['tools'];
handler.command = /^(viewimage|vi)$/i;
handler.rowner = true;

export default handler;
