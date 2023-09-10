/*Salva immagine*/

import fs from 'fs';

let handler = async (m, { text }) => {
  if (!text) throw `Inserisci un nome per il tuo file immagine e l'estensione desiderata (es. nome.png, nome.jpg, etc.)`;
  if (!m.quoted || !m.quoted.fileSha256) throw `Rispondi all'immagine che vuoi salvare.`;
  let media = await m.quoted.download();
  const path = `src/${text}`;
  await fs.writeFileSync(path, media);
  m.reply(`Immagine salvata come ${path}`);
};

handler.help = ['saveimage <nome>'];
handler.tags = ['tools'];
handler.command = /^(saveimage|sp)$/i;
handler.rowner = true;

export default handler;
