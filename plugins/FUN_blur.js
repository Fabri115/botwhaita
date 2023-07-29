import jimp from 'jimp';

const handler = async (m, {conn, text}) => {
  const image = m.message?.imageMessage ?
		await m.download() :
			/image/.test(m.quoted?.mediaType) ?
		await m.quoted.download() :
			m.mentionedJid?.[0] ?
		await conn.profilePictureUrl(m.mentionedJid[0], 'image') :
			await conn.profilePictureUrl(m.quoted?.sender || m.sender, 'image');
  if (!image) throw `Couldn't fetch the required Image`;
  const level = text || '5'; const img = await jimp.read(image);
  img.blur(isNaN(level) ? 5 : parseInt(level));
  img.getBuffer('image/jpeg', (err, buffer) => {
    if (err) throw err?.message || `Couldn't blur the image`;
    m.reply(buffer);
  });
};
handler.command = /^(bluur)$/i;

export default handler;
